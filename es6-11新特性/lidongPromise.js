function lidongPromise(executor) {
  this.status = "pending";
  this.res = undefined;
  this.cb = [];
  resolve = (res) => {
    if (this.status !== "pending") {
      return;
    }
    this.status = "fulfilled";
    this.res = res;
    this.cb.length &&
      this.cb.forEach((eachCb) => {
        eachCb.success && eachCb.success(this.res);
      });
  };
  reject = (res) => {
    if (this.status !== "pending") {
      return;
    }
    this.status = "rejected";
    this.res = res;
    this.cb.length &&
      this.cb.forEach((eachCb) => {
        eachCb.error && eachCb.error(this.res);
      });
  };
  executor(resolve, reject);
}
lidongPromise.prototype.then = function (success = (s) => s, error = (e) => e) {
  return new lidongPromise((resolve, reject) => {
    if (this.status === "fulfilled") {
      let res = success && success(this.res);
      if (res instanceof lidongPromise) {
        res.then(
          (res) => {
            resolve(res);
          },
          (err) => {
            reject(err);
          }
        );
      } else {
        resolve(res);
      }
    }
    if (this.status === "rejected") {
      let res = error && error(this.res);
      if (res instanceof lidongPromise) {
        res.then(
          (res) => {
            resolve(res);
          },
          (err) => {
            reject(err);
          }
        );
      } else {
        reject(res);
      }
    }
    if (this.status === "pending") {
      this.cb.push({
        success: () => {
          let res = success();
          if (resolve instanceof lidongPromise) {
            res.then(
              (res) => {
                resolve(res);
              },
              (err) => {
                reject(err);
              }
            );
          } else {
            resolve(res);
          }
        },
        error: () => {
          let res = error();
          if (resolve instanceof lidongPromise) {
            res.then(
              (res) => {
                resolve(res);
              },
              (err) => {
                reject(err);
              }
            );
          } else {
            reject(res);
          }
        },
      });
    }
  });
};

lidongPromise.prototype.catch((error) => {
  this.then(undefined, error);
});
