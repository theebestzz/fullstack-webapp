import express, { Express } from "express";
import { Server } from "./setupServer";
import dbConnection from "./setupDatabase";

class Application {
  public initialize(): void {
    dbConnection();
    const app: Express = express();
    const server: Server = new Server(app);
    server.start();
  }
}

const application: Application = new Application();
application.initialize();
