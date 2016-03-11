package com.rgi.zkhcy.front.web.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.rgi.zkhcy.front.common.bean.dataBean.ZkContentInfoData;
import com.rgi.zkhcy.front.service.service.ZkEnContentInfoService;
import com.rgi.zkhcy.front.web.common.BaseController;

/**
 * 类 名: ZkLuceneController <br/>
 * 描 述: 站内搜索 <br/>
 * 作 者: 周志华 <br/>
 * 创 建： 2015年12月15日 <br/>
 *
 * 历 史: (版本)作者 时间 <br/>
 */
@Controller
@RequestMapping("/zkEnLucene")
public class ZkEnLuceneController extends BaseController {

	@Autowired
	private ZkEnContentInfoService zkEnContentInfoService;

	private static final Integer pageNum = 10;
	
	/**
	 * 描 述： 获取站内搜索数据<br/>
	 * 作 者：周志华<br/>
	 * 历 史: (版本)作者 时间 注释 <br/>
	 * @return
	 */
	@RequestMapping(value="/getZkLucene",method=RequestMethod.GET)
	@ResponseBody
	public Object getZkLucene(@RequestParam(value="category")String category,@RequestParam(value="pageCurrent")int pageCurrent,@RequestParam(value="query")String query) {
		//请求示例 http://192.168.1.205:8080/zky/zkLucene/getZkLucene?category=1&pageCurrent=7&query=%E4%B8%AD%E7%A7%91
		log.info("首部搜索---Controller---获取data---接收请求对象{}");
		Map<String, Object> queryMap = new HashMap<String, Object>();
		Map<String, Object> resMap = new HashMap<String, Object>();
		if(!StringUtils.isEmpty(category)){
		}else{
			category = "all";
		}
		if(StringUtils.isEmpty(pageCurrent)){
			pageCurrent = 1;
		}
		if(StringUtils.isEmpty(query)){
			category = "";
		}
		queryMap.put("category", category);
		queryMap.put("pageStart", (pageCurrent-1)*pageNum);//当前页第一条
		queryMap.put("pageEnd", pageCurrent*pageNum-1);//当前页最后一条数据
		queryMap.put("query", query);//查询内容
		queryMap.put("pageNum", pageNum);//每页几条数据
		
		long size = 0;
		size = zkEnContentInfoService.queryLuceneAmount(queryMap);
		if(size>0){
			queryMap.put("pageSize", size/pageNum+1);//分页
			queryMap.put("ListSize", size);//总数据
			List<ZkContentInfoData> list = zkEnContentInfoService.getLuceneList(queryMap);
			resMap.put("list", list);
		}else{
			queryMap.put("ListSize", 0);//总数据
		}
		resMap.put("queryMap", queryMap);
		return resMap;
	}
	
}
