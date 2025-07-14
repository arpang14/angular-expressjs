import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse }
  from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

@Injectable()
export class CustomInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    // return next.handle(req).do(evt => {
    //   if (evt instanceof HttpResponse) {
    //     console.log('---> status:', evt.status);
    //     console.log('---> filter:', req.params.get('filter'));
    //   }
    // });

        const idToken = localStorage.getItem("id_token");
// if the JWT is present, then we will clone the HTTP headers, and add an extra Authorization header, which will contain the JWT
        if (idToken) {
            const cloned = req.clone({
                headers: req.headers.set("Authorization",
                    "Bearer " + idToken)
            });

            return next.handle(cloned);
        }
        else {
            return next.handle(req);
        }




  }
}