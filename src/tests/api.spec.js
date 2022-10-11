const request = require("supertest");
const express = require("express");
const baseURL = "http://localhost:3000";
const app = express();
/*
API level tests for Project API endpoints
*/

beforeEach(() => {
  jest.setTimeout(60000);
});

describe.skip("Test Project warning GET endpoints", () => {
  it("GET warning by state should return 200", () => {
    request(app)
      .get("/?state=Qld")
      .expect(200)
      .then((response) => {
        assert(response.body.length >= 1).toBe(true);
      });
  });

  it("GET warning by state should throw Bad request 400 for invalid param ", () => {
    request(app)
      .get("/?states=Qld")
      .expect(400)
      .then((response) => {
        assert(response.body.length >= 1).toBe(true);
      });
  });

  it("GET warning by state should throw error message ", () => {
    request(app)
      .get("/?states=Qld")
      .expect(400)
      .then((response) => {
        assert(response.body.length >= 1).toBe(true);
      });
  });

  // Tests for GET Warning by ID endpoint

  it("GET warning by id should return 200", () => {
    request(app)
      .get("/warning/IDQ10090")
      .expect(200)
      .then((response) => {
        assert(response.body.length >= 1).toBe(true);
      });
  });

  it("GET warning by id should throw error message", () => {
    request(app)
      .get("/warning/aaa10090")
      .expect(400)
      .then((response) => {
        assert(response.text).toBe("Something went wrong");
      });
  });

  it("GET warning by id should 400 Error", () => {
    request(app)
      .get("/warnings/aaa10090")
      .expect(400)
      .then((response) => {
        assert(response.text).toBe("Something went wrong");
      });
  });
});
