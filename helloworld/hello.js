import { check, group, sleep } from "k6";
import { Rate } from "k6/metrics";
import http from "k6/http";
import { SharedArray } from "k6/data";
import encoding from "k6/encoding";
import {
    jUnit,
    textSummary,
} from "https://jslib.k6.io/k6-summary/0.0.1/index.js";

export function setup() {}

export default function (data) {
    createExecution();
    sleep(2);
}

export function teardown(data) {}
// export function handleSummary(data) {
//   console.log('Preparing the end-of-test summary...');
//   return {
//     'stdout': textSummary(data, { indent: ' ', enableColors: true }), // Show the text summary to stdout...
//   };
// }

function createExecution() {
    const before = new Date().getTime();
    const T = 1;

    let params = {
        headers: {
            authorization:
                "Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJqWVpYSzBWUHROcDRpaVJzcUlfT3Q4LW56NURCRXNlM0VFd2RHSEZfUjZVIn0.eyJleHAiOjE3MzA3MDI1NjEsImlhdCI6MTczMDY5NTM2MSwianRpIjoiYjlmNjEzNTMtYjc1MC00OGIxLTkzZTgtYzQyMTMxNGFiYzM1IiwiaXNzIjoiaHR0cHM6Ly9sb2dpbi5xYS5rYXRhbG9uLmNvbS9yZWFsbXMva2F0YWxvbiIsInN1YiI6ImQ3NTBiMzViLWUyNTMtNDMyNC1iNGQyLWU2N2QxMzA3ZmE1MSIsInR5cCI6IkJlYXJlciIsImF6cCI6ImthdGFsb24tdGVzdG9wcy1nZW4zIiwic2lkIjoiMDFmYWIyMjAtZGQ5OS00YjBhLTk4YjItYTljYTA3NTlhOWEwIiwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCIsImVtYWlsIjoiY2hpLm5ndXllbisxQGthdGFsb24uY29tIn0.I6qo2IEHFP9A2u2HnqEVEiCL6nKXfzi9lt8Qzc2O2pNoZSUnOg0K78lXSZ9NTTQcicPwcUJy63QPFGDDQA59N_tEXy9o0gpKuUOALPxsu4UBIC16g3uktPMOTMDQz0snzRL2c2nbol97GHH6OiXJIb3EJNoSaJCraDn_3IXQanyCwms-Q_qJtrjPBzo1osZvmTSmMuCV_Y31R0PYtTiRtBjfVncy_qzVLWrHRucUj4sDS172kOTd52qDzWXkiVkK6G7dGd4ofLnWVy_YQGZJRXXm06Y0xGATYutkbKw7pYeu7U5pXPMaNvcA3lgVgvJikAeTDqpy3I24KhcV27JxDg",
            "Content-Type": "application/json",
            accept: "application/json, text/plain, */*",
            "accept-language": "en-US,en;q=0.9",
            origin: "https://platform.qa.katalon.com",
            referer: "https://platform.qa.katalon.com/",
            "x-account-id": "fcb31c41-08de-4719-898e-9bb37ecbdafd",
            "x-organization-id": "5032",
            "x-project-id": "18400",
        },
    };
    let payload = JSON.stringify({
        testSuiteIds: [516366],
        environments: [
            {
                osName: "macos",
                osVersion: "Big Sur",
                browserName: "safari",
                browserVersion: "17.6",
            },
        ],
        name: "Test Duplicate TC",
    });
    let response = http.post(
        "http://localhost:28080/hello/res",
        payload,
        params
    );
    check(response, {
        "can create execution": () => response.status === 200,
    });

    // const after = new Date().getTime();
    // const diff = (after - before) / 1000;
    // const remainder = T - diff;
    // check(remainder, { 'reached request rate': remainder > 0 });
    // if (remainder > 0) {
    //   sleep(remainder);
    // }
    if (response.status != 200) console.log("error code:" + response.status);
}
