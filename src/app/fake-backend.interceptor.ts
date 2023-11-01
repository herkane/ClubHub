import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import {User} from "../models/user.interface";

export const FAKE_JWT_TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IkFkbWluIEFkbWluIiwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJyb2xlcyI6ImFkbWluIn0.nh6Ib7u9sN1iFT6-0aDKqLFnDKqb1ZgO_7yf_eYYffA';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const { url, method, headers } = request;
    if (url.endsWith('login') && method === 'POST') {
      return handleLogin();
    }
    if (url.endsWith('products') && method === 'GET') {
      return handleProducts();
    }
    return next.handle(request);

    function isLoggedIn() {
      return headers.get('authorization') === FAKE_JWT_TOKEN;
    }

    function handleLogin(): Observable<HttpEvent<unknown>> {
      return of(
        new HttpResponse({
          status: 200,
          body: {
            id: '1',
            username: 'admin',
            token: FAKE_JWT_TOKEN,
          },
        })
      );
    }

    function handleProducts(): Observable<HttpEvent<unknown>> {
      if (!isLoggedIn()) {
        return throwError({ status: 401, error: { message: 'Unauthorized' } });
      }

      const products: { name: string; id: number }[] = [...new Array(20).keys()].map(
        (item) => ({
          id: item,
          name: `Product ${item}`,
        })
      );

      return of(
        new HttpResponse({
          status: 200,
          body: products,
        })
      );
    }
  }
}

export const FakeBackendProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true,
};
