package com.rgi.zkhcy.front.web.controller;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.rgi.zkhcy.front.common.bean.dataBean.ZkCompInfoData;
import com.rgi.zkhcy.front.service.service.ZkEnCompInfoService;
import com.rgi.zkhcy.front.web.common.BaseController;

/**
 * 
 * @ClassName ZkCompInfoController
 * @describe 公司信息
 * @author JQchen
 * @version 2015-11-24 下午5:22:44
 */
@Controller
@RequestMapping("/zkEnCompInfo")
public class ZkEnCompInfoController extends BaseController{

	@Autowired
	private ZkEnCompInfoService zkEnCompInfoService;
	
	/**
	 * 
	 * @author JQchen
	 * @describe 获得公司信息 
	 * @version 2015-11-26 上午11:35:08 
	 * @return
	 */
	@RequestMapping(value="/selectZkCompInfo",method=RequestMethod.GET)
	@ResponseBody
	public Object selectZkCompInfo(){
		log.info("公司信息模块---Controller--- 获得公司信息  ---接收请求对象");
		List<ZkCompInfoData> list=zkEnCompInfoService.selectZkCompInfoList();
		Map<String,String> map=new HashMap<String,String>();
		if(list!=null&&list.size()>0){
			map.put("id", list.get(0).getId());
			map.put("addr", list.get(0).getAddr());
			map.put("tele",list.get(0).getTele());
			map.put("fax",list.get(0).getFax());
			map.put("email",list.get(0).getEmail());
		}
		return map;
	}
	
}
