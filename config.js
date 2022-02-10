/*
 * @Date: 2022-02-10 14:46:13
 * @LastEditors: chenqi
 * @LastEditTime: 2022-02-10 15:00:29
 * @FilePath: \juejinCheckIn-main\config.js
 */
// 配置文件
module.exports = {
  // 请求地址
  cookie:
    "_tea_utm_cache_2608={%22utm_source%22:%22infinitynewtab.com%22}; _ga=GA1.2.1523302933.1642577909; MONITOR_WEB_ID=83fef773-4038-46ec-871f-ca2714727bac; __tea_cookie_tokens_2608=%257B%2522web_id%2522%253A%25227054818360404805132%2522%252C%2522ssid%2522%253A%2522f3b96f91-b073-4d0c-8c5e-f48da2f034bf%2522%252C%2522user_unique_id%2522%253A%25227054818360404805132%2522%252C%2522timestamp%2522%253A1642577909026%257D; _gid=GA1.2.2007033377.1644204316; passport_csrf_token_default=b48ab4a989ed927ab10e16e36a302b27; passport_csrf_token=b48ab4a989ed927ab10e16e36a302b27; _tea_utm_cache_2018=undefined; passport_auth_status=5ba505ae218b7f3fc3a0ddd5581c4974%2C; passport_auth_status_ss=5ba505ae218b7f3fc3a0ddd5581c4974%2C; sid_guard=6df3c2c2653e9757ebd9a4a2fe3a13f3%7C1644473413%7C5183999%7CMon%2C+11-Apr-2022+06%3A10%3A12+GMT; uid_tt=fa5112c9a038aa7fdcba993fa436b5e5; uid_tt_ss=fa5112c9a038aa7fdcba993fa436b5e5; sid_tt=6df3c2c2653e9757ebd9a4a2fe3a13f3; sessionid=6df3c2c2653e9757ebd9a4a2fe3a13f3; sessionid_ss=6df3c2c2653e9757ebd9a4a2fe3a13f3; sid_ucp_v1=1.0.0-KGQ3YmU5MjA0OTljMmQ5YmRhMzgxMWQ5NDBlYWU3NmY3MzFjNzg0ZWIKFwjH3MG09fWjARDF2JKQBhiwFDgCQPEHGgJsZiIgNmRmM2MyYzI2NTNlOTc1N2ViZDlhNGEyZmUzYTEzZjM; ssid_ucp_v1=1.0.0-KGQ3YmU5MjA0OTljMmQ5YmRhMzgxMWQ5NDBlYWU3NmY3MzFjNzg0ZWIKFwjH3MG09fWjARDF2JKQBhiwFDgCQPEHGgJsZiIgNmRmM2MyYzI2NTNlOTc1N2ViZDlhNGEyZmUzYTEzZjM; n_mh=bLLpdBukIaBrt2euU4pyP-1tDjY9IWJLdsD0a_FH3TE",
  baseUrl: "https://api.juejin.cn",
  // api地址
  api: {
    // 签到
    checkIn: "/growth_api/v1/check_in",
    // 查询签到
    getCheckStatus: "/growth_api/v1/get_today_status",
    // 查询签到天数
    getCheckInDays: "/growth_api/v1/get_counts",
    // 查询当前矿石
    getCurrentPoint: "/growth_api/v1/get_cur_point",
    // 查询抽奖
    getlotteryStatus: "/growth_api/v1/lottery_config/get",
    // 抽奖
    draw: "/growth_api/v1/lottery/draw",
    // 获取沾喜气列表用户
    getLuckyUserList: "/growth_api/v1/lottery_history/global_big",
    // 沾喜气
    dipLucky: "/growth_api/v1/lottery_lucky/dip_lucky",
  },
  // 邮箱配置
  emailConfig: {
    // 邮箱服务 163|qq
    service: "qq",
    // 邮箱 手动填写
    email: "1045135811@qq.com",
    // 邮箱授权码  手动填写
    pass: "hilchochhugebdee",
  },
};
