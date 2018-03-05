import {Express} from "express"

export class Routes{
    static init(app:Express) {
		app.get("/readiness", function (req, res) {
			res.status(200);
			res.end();
        })
        
        app.get("/liveness", function (req, res) {
			res.status(200);
			res.end();
		})
    }
}