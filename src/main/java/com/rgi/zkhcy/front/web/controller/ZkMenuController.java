package com.rgi.zkhcy.front.web.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.rgi.zkhcy.front.common.bean.dataBean.ZkMenuData;
import com.rgi.zkhcy.front.service.service.ZkMenuService;
import com.rgi.zkhcy.front.web.common.BaseController;

/**
 * 
 * @ClassName ZkMenuController
 * @describe 中科菜单
 * @author JQchen
 * @version 2015-11-24 下午5:23:56
 */
@Controller
@RequestMapping("/zkMenu")
public class ZkMenuController extends BaseController{

	@Autowired
	private ZkMenuService zkMenuService;
	
	/**
	 * 
	 * @author JQchen
	 * @describe 获取所有首部菜单 
	 * @version 2015-11-25 下午2:37:37 
	 * @return
	 */
	@RequestMapping(value="/getHeadMenuList",method=RequestMethod.GET)
	@ResponseBody
	public Object getHeadMenuList(){
		log.info("中科菜单模块---Controller--- 获取所有首部菜单  ---接收请求对象");
		List<Map<String, Object>> map=zkMenuService.selectHeadMenuListByType();
		return map;
	}
	/**
	 * 
	 * @author JQchen
	 * @describe 获取所有底部菜单 
	 * @version 2015-11-25 下午2:37:37 
	 * @return
	 */
	@RequestMapping(value="/getFootMenuList",method=RequestMethod.GET)
	@ResponseBody
	public Object getFootMenuList(){
		log.info("中科菜单模块---Controller--- 获取所有底部菜单  ---接收请求对象");
		List<Map<String, Object>> map=zkMenuService.selectFootMenuListByType();
		return map;
	}
	/**
	 * 
	 * @author JQchen
	 * @describe 根据父菜单ID查询子首部菜单列表
	 * @version 2015-11-25 下午5:54:43 
	 * @param parentId
	 * @return
	 */
	@RequestMapping(value="/selectHeadMenuByParentId",method=RequestMethod.GET)
	@ResponseBody
	public Object selectHeadMenuByParentId(@RequestParam(value="parentId")String parentId){
		log.info("中科菜单模块---Controller--- 查询子首部菜单列表  ---接收请求对象:parentId{}"+parentId);
		List<Map<String, Object>>map=zkMenuService.selectHeadMenuByParentId(parentId);
		return map;
	}
	/**
	 * 
	 * @author JQchen
	 * @describe 根据父菜单ID查询子其他菜单列表 
	 * @version 2015-11-25 下午5:54:43 
	 * @param parentId
	 * @return
	 */
	@RequestMapping(value="/selectOtherMenuListByParentId",method=RequestMethod.GET)
	@ResponseBody
	public Object selectOtherMenuListByParentId(@RequestParam(value="parentId")String parentId){
		log.info("中科菜单模块---Controller--- 查询子其他菜单列表   ---接收请求对象:parentId{}"+parentId);
		List<Map<String, Object>>map=zkMenuService.selectOtherMenuListByParentId(parentId);
		return map;
	}
	
	
	
	/**
	 * 
	 * @author JQchen
	 * @describe 根据父菜单ID查询子其他菜单列表 
	 * @version 2015-11-25 下午5:54:43 
	 * @param parentId
	 * @return
	 */
	@RequestMapping(value="/selectMenuListByParentId",method=RequestMethod.GET)
	@ResponseBody
	public Object selectMenuListByParentId(@RequestParam(value="parentId")String parentId){
		log.info("中科菜单模块---Controller--- 查询子其他菜单列表   ---接收请求对象:parentId{}"+parentId);
		List<ZkMenuData> list=zkMenuService.selectMenuListByParentId(parentId);
		return list;
	}
}
