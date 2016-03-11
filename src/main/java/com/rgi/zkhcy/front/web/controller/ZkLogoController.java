package com.rgi.zkhcy.front.web.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.rgi.zkhcy.front.common.bean.dataBean.ZkLogoData;
import com.rgi.zkhcy.front.service.service.ZkLogoService;
import com.rgi.zkhcy.front.web.common.BaseController;

/**
 * 
 * @ClassName ZkLogoController
 * @describe logo 
 * @author JQchen
 * @version 2015-11-28 下午3:44:17
 */
@Controller
@RequestMapping("/zkLogo")
public class ZkLogoController extends BaseController{
	@Autowired
	private ZkLogoService zkLogoService;
	
	/**
	 * 
	 * @author JQchen
	 * @describe 获取logo 
	 * @version 2015-11-28 下午3:47:30 
	 * @return
	 */
	@RequestMapping(value="/getZkLogo",method=RequestMethod.GET)
	@ResponseBody
	public Object getZkLogo(){
		log.info("logo模块---Controller---获取logo---接收请求对象{}");
		List<ZkLogoData>list=zkLogoService.getLogoList();
		Map<String,Object> map=new HashMap<String, Object>();
		if(list!=null&&list.size()>0){
			map.put("id", list.get(0).getId());
			map.put("picSrc", list.get(0).getPicsrc());
		}
		return map;
	}
}
