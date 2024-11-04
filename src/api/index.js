import request from "@/utils/request";

export const worker = {
  // 数据分页查询
  getWorkerList(data) {
    return request({
      url: "/worker/page",
      method: "post",
      data: data,
    });
  },
  // 重置密码
  resetPwd(data) {
    return request({
      url: "/worker/resetPwd",
      method: "post",
      data: data,
    });
  },
  /**
   * 新增工人
   * @param {*} data
   * @returns
   */
  addWorker(data) {
    return request({
      url: "/worker/addWorker",
      method: "post",
      data: data,
    });
  },
  ruleSetting(data) {
    return request({
      url: "/worker/ruleSetting",
      method: "post",
      data: data,
    });
  },
  deptList() {
    return request({
      url: "/worker/deptList",
      method: "get",
    });
  },
  getRule() {
    return request({
      url: "/worker/getRule",
      method: "get",
    });
  },
  /**
   *根据名字或者身份证查询工人列表 (新增工人)
   * @param {{searchKey:string}} params
   * @returns
   */
  getUserList(params) {
    return request({
      url: "/worker/getUserList",
      method: "get",
      params,
    });
  },
};

export const factory = {
  /**
   * 工厂查询
   * @param {*} data
   * @returns
   */
  getFactoryList(data) {
    return request({
      url: "/factory/page",
      method: "post",
      data: data,
    });
  },
  /**
   * 工厂详情接口
   * @param {*} id
   * @returns
   */
  getById(id) {
    return request({
      url: `/factory/getById/${id}`,
      method: "get",
    });
  },

  /**
   * 删除工厂
   * @param {*} id
   * @returns
   */
  removeFactoryOccupation(id) {
    return request({
      url: `/factory/removeFactoryOccupation/${id}`,
      method: "get",
    });
  },

  /**
   * 编辑工厂的工种信息
   * @param {{
        "id": 0,
        "occupation": "string",
        "payrollMethod": "string",
        "salary": 0,
        "type": "string",
        "workDuration": 0
    }} data
   * @returns
   */
  editFactoryOccupation(data) {
    return request({
      url: `/factory/editFactoryOccupation`,
      method: "post",
      data: data,
    });
  },

  /**
   * 编辑工厂信息只编辑工厂名称/联系人/联系电话/联系地址
   * @param {{
        "current": 0,
        "factoryAddress": "string",
        "factoryContactName": "string",
        "factoryContactPhone": "string",
        "factoryName": "string",
        "id": 0,
        "size": 0
    }} data 
   * @returns 
   */
  editFactory(data) {
    return request({
      url: `/factory/editFactory`,
      method: "post",
      data: data,
    });
  },

  /**
   * 新增工厂和工作
   * @param {*} data
   * @returns
   */
  add(data) {
    return request({
      url: `/factory/add`,
      method: "post",
      data: data,
    });
  },
};
