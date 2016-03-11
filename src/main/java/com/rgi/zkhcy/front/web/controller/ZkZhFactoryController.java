package com.rgi.zkhcy.front.web.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.rgi.zkhcy.front.common.bean.dataBean.ZkZhFactoryData;
import com.rgi.zkhcy.front.service.service.ZkContentImgService;
import com.rgi.zkhcy.front.service.service.ZkZhFactoryService;
import com.rgi.zkhcy.front.web.common.BaseController;

/**
 * 
 * @ClassName ZkContentInfoController
 * @describe 内容信息
 * @author JQchen
 * @version 2015-11-24 下午5:23:21
 */
@Controller
@RequestMapping("/zkZhFactory")
public class ZkZhFactoryController extends BaseController {

	@Autowired
	private ZkZhFactoryService zkZhFactoryService;

	@Autowired
	private ZkContentImgService zkContentImgService;
	
	/**
	 * 描 述： <br/>
	 * 作 者：周志华<br/>
	 * 历 史: (版本)作者 时间 注释 <br/>
	 * 
	 * @return
	 */
	@RequestMapping(value="/getFactoryList",method=RequestMethod.GET)
	@ResponseBody
	public Object getFactoryList(@RequestParam(value="lang")String lang) {
		log.info("工厂模块---Controller---查询有效factoryList");
		Map<String, Object> map = new HashMap<String, Object>();
		List<ZkZhFactoryData> list = zkZhFactoryService.getFactoryList(lang);
		if(list!=null && list.size()>0){
			map.put("factoryList", list);
		}else{
			map.put("factoryList", null);
		}
		return map;
	}

	/**
	 * 描 述： <br/>
	 * 作 者：周志华<br/>
	 * 历 史: (版本)作者 时间 注释 <br/>
	 * 
	 * @return
	 */
	@RequestMapping(value="/getFactoryByMenuId",method=RequestMethod.GET)
	@ResponseBody
	public Object getFactoryByMenuId(@RequestParam(value="menuId")String menuId,@RequestParam(value="lang")String lang) {
		log.info("工厂模块---Controller---根据id查询factory");
		Map<String, Object> map = new HashMap<String, Object>();
		List<ZkZhFactoryData> list  = zkZhFactoryService.getFactoryByMenuId(menuId, lang);
		if(list!=null && list.size()>0){
			
			for(int i=0;i<list.size();i++){
				list.get(i).setImgs(zkContentImgService.selectContentImgByContentId(list.get(i).getId()));
//				ent.setImgs(zkContentImgService.selectContentImgByContentId(ent.getId()));
			}
			map.put("factoryList", list);
		}else{
			map.put("factoryList", null);
		}
		return map;
	}
	
	/**
	 * 描 述： <br/>
	 * 作 者：周志华<br/>
	 * 历 史: (版本)作者 时间 注释 <br/>
	 * 
	 * @return
	 */
	@RequestMapping(value="/getProDebreifing",method=RequestMethod.GET)
	@ResponseBody
	public Object getProDebreifing(@RequestParam(value="lang")String lang) {
		log.info("工厂模块---Controller---获取项目进展");
		Map<String, Object> map = new HashMap<String, Object>();
		List<ZkZhFactoryData> list = zkZhFactoryService.getProDebreifing(lang);
		if(list!=null && list.size()>0){
			map.put("getProDebreifing", list.get(0));
		}else{
			map.put("getProDebreifing", null);
		}
		return map;
	}
	
}
