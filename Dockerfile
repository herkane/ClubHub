FROM node:21 AS front_build
WORKDIR /front
COPY frontend .
RUN npm install
RUN npm run build

FROM maven:3 AS back_build
WORKDIR /app
COPY  backend .
COPY --from=front_build /front/dist/angular-club-hub /app/src/main/resources/static
RUN rm -rf frontend
RUN mvn clean package

FROM openjdk:22-slim-bullseye
WORKDIR /server
COPY --from=back_build  /app/target/club_hub-0.0.1-SNAPSHOT.war .
EXPOSE 8080
CMD ["java","-jar","/server/club_hub-0.0.1-SNAPSHOT.war"]