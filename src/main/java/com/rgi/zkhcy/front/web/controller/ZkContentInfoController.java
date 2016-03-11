package com.rgi.zkhcy.front.web.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.rgi.zkhcy.front.common.bean.ZkContentInfo;
import com.rgi.zkhcy.front.common.bean.dataBean.ZkContentInfoData;
import com.rgi.zkhcy.front.common.util.CommonMethod;
import com.rgi.zkhcy.front.service.service.ZkContentImgService;
import com.rgi.zkhcy.front.service.service.ZkContentInfoService;
import com.rgi.zkhcy.front.web.common.BaseController;

/**
 * 
 * @ClassName ZkContentInfoController
 * @describe 内容信息 
 * @author JQchen
 * @version 2015-11-24 下午5:23:21
 */
@Controller
@RequestMapping("/zkContentInfo")
public class ZkContentInfoController extends BaseController{
	
	@Autowired
	private ZkContentInfoService zkContentInfoService;
	
	@Autowired
	private ZkContentImgService zkContentImgService;
	
	/**
	 * 
	 * @author JQchen
	 * @describe 通过ID查询对象 
	 * @version 2015-11-24 下午5:08:47 
	 * @param id
	 * @return
	 */
	@RequestMapping(value="/selectZkContentInfoById",method=RequestMethod.GET)
	@ResponseBody
	public Object selectZkContentInfoById(@RequestParam(value="id")String id) {
		log.info("内容信息模块---Controller---根据主键查询内容信息---接收请求对象:id{}"+id);
		Map<String, Object>map=new HashMap<String, Object>();
		ZkContentInfoData zkContentInfoData=zkContentInfoService.selectZkContentInfoById(id);
		if(zkContentInfoData!=null){
			map.put("id",zkContentInfoData.getId());
			map.put("title",zkContentInfoData.getTitle());
			map.put("content",zkContentInfoData.getContent());
			map.put("long_title",zkContentInfoData.getLong_title());
			map.put("contorder",zkContentInfoData.getContorder());
			map.put("newsfrom",zkContentInfoData.getNewsfrom());
			map.put("pic_src",zkContentInfoData.getPic_src());
			map.put("publicTime",zkContentInfoData.getPublicTime());
			map.put("imgs", zkContentImgService.selectContentImgByContentId(zkContentInfoData.getId()));
		}
		return map;
	}
	/**
	 * 
	 * @author JQchen
	 * @describe  查询首页最新动态 
	 * @version 2015-11-28 下午12:26:18 
	 * @param menuId
	 * @return
	 */
	@RequestMapping(value="/selectIndexNewsContent",method=RequestMethod.GET)
	@ResponseBody
	public Object selectIndexNewsContent() {
		log.info("内容信息模块---Controller--- 查询首页最新动态 ---接收请求对象");
		List<Map<String,Object>> mapList=new ArrayList<Map<String,Object>>();
		List<ZkContentInfoData> list=zkContentInfoService.selectIndexNewsContent();
		if(list!=null&&list.size()>0){
			for (ZkContentInfoData zkContentInfoData : list) {
				Map<String, Object>map=new HashMap<String, Object>();
				map.put("id",zkContentInfoData.getId());
				map.put("title",zkContentInfoData.getTitle());
				mapList.add(map);
			}
		}
		return mapList;
	}
	/**
	 * 
	 * @author JQchen
	 * @describe 根据菜单ID查询内容列表 
	 * @version 2015-11-28 下午12:26:18 
	 * @param menuId
	 * @return
	 */
	@RequestMapping(value="/selectContentByMenuId",method=RequestMethod.GET)
	@ResponseBody
	public Object selectContentByMenuId(@RequestParam(value="menuId")String menuId,HttpServletRequest req,HttpServletResponse response) {
		log.info("内容信息模块---Controller---根据菜单ID查询内容列表 ---接收请求对象:menuId{}"+menuId);
		List<Map<String,Object>> mapList=new ArrayList<Map<String,Object>>();
		List<ZkContentInfoData> list=zkContentInfoService.selectContentByMenuId(menuId,req);
		if(list!=null&&list.size()>0){
			for (ZkContentInfoData zkContentInfoData : list) {
				Map<String, Object>map=new HashMap<String, Object>();
				map.put("id",zkContentInfoData.getId());
				map.put("title",zkContentInfoData.getTitle());
				map.put("content",zkContentInfoData.getContent());
				map.put("long_title",zkContentInfoData.getLong_title());
				map.put("contorder",zkContentInfoData.getContorder());
				map.put("newsfrom",zkContentInfoData.getNewsfrom());
				map.put("pic_src",zkContentInfoData.getPic_src());
				map.put("publicTime",zkContentInfoData.getPublicTime());

				//图片处理
				List<String> listS = new ArrayList<String>();
				String s = zkContentInfoData.getPic_src();
				if(!StringUtils.isEmpty(s)){
					String arr[] = s.split("\\|");
					for(int i=0;i<arr.length;i++){
						listS.add(arr[i]);
					}
				}
				map.put("imgs", listS);
				
				map.put("isTop",zkContentInfoData.getIsTop());
				//图片处理---组图
				List<String> listP = new ArrayList<String>();
				String g = zkContentInfoData.getGroupPic();
				if(!StringUtils.isEmpty(g)){
					String arr[] = g.split("\\|");
					for(int i=0;i<arr.length;i++){
						listP.add(arr[i]);
					}
				}
				map.put("groupPicList", listP);
				
//				map.put("imgs", zkContentImgService.selectContentImgByContentId(zkContentInfoData.getId()));
				mapList.add(map);
			}
		}
		
		//使用gosn处理html标签
		CommonMethod.gson2Jsp(response, mapList);
		return null;
//		return mapList;
	}
	
	
	/**
	 * 
	 * @author JQchen
	 * @describe 根据菜单ID查询一级内容列表 
	 * @version 2015-11-28 下午12:26:18 
	 * @param menuId
	 * @return
	 */
	@RequestMapping(value="/selectContentForLevel1ByMenuId",method=RequestMethod.GET)
	@ResponseBody
	public Object selectContentForLevel1ByMenuId(@RequestParam(value="menuId")String menuId) {
		log.info("内容信息模块---Controller---根据菜单ID查询一级内容 ---接收请求对象:menuId{}"+menuId);
		List<Map<String,Object>> mapList=new ArrayList<Map<String,Object>>();
		List<ZkContentInfoData> list=zkContentInfoService.selectContentForLevel1ByMenuId(menuId);
		if(list!=null&&list.size()>0){
			for (ZkContentInfoData zkContentInfoData : list) {
				Map<String, Object>map=new HashMap<String, Object>();
				map.put("id",zkContentInfoData.getId());
				map.put("title",zkContentInfoData.getTitle());
				map.put("content",zkContentInfoData.getContent());
				map.put("long_title",zkContentInfoData.getLong_title());
				map.put("contorder",zkContentInfoData.getContorder());
				map.put("newsfrom",zkContentInfoData.getNewsfrom());
				map.put("pic_src",zkContentInfoData.getPic_src());
				map.put("publicTime",zkContentInfoData.getPublicTime());
				map.put("imgs", zkContentImgService.selectContentImgByContentId(zkContentInfoData.getId()));
				mapList.add(map);
			}
		}
		return mapList;
	}
	/**
	 * 
	 * @author JQchen
	 * @describe 根据菜单ID查询二级内容列表  
	 * @version 2015-11-28 下午12:26:18 
	 * @param menuId
	 * @return
	 */
	@RequestMapping(value="/selectContentForLevel2ByMenuId",method=RequestMethod.GET)
	@ResponseBody
	public Object selectContentForLevel2ByMenuId(@RequestParam(value="menuId")String menuId) {
		log.info("内容信息模块---Controller---根据菜单ID查询二级内容 ---接收请求对象:menuId{}"+menuId);
		List<Map<String,Object>> mapList=new ArrayList<Map<String,Object>>();
		List<ZkContentInfoData> list=zkContentInfoService.selectContentForLevel2ByMenuId(menuId);
		if(list!=null&&list.size()>0){
			for (ZkContentInfoData zkContentInfoData : list) {
				Map<String, Object>map=new HashMap<String, Object>();
				map.put("id",zkContentInfoData.getId());
				map.put("title",zkContentInfoData.getTitle());
				map.put("content",zkContentInfoData.getContent());
				map.put("long_title",zkContentInfoData.getLong_title());
				map.put("contorder",zkContentInfoData.getContorder());
				map.put("newsfrom",zkContentInfoData.getNewsfrom());
				map.put("pic_src",zkContentInfoData.getPic_src());
				map.put("publicTime",zkContentInfoData.getPublicTime());
				map.put("imgs", zkContentImgService.selectContentImgByContentId(zkContentInfoData.getId()));
				mapList.add(map);
			}
		}
		return mapList;
	}
	/**
	 * 
	 * @author JQchen
	 * @describe 根据菜单ID查询三级内容列表 
	 * @version 2015-11-28 下午12:26:18 
	 * @param menuId
	 * @return
	 */
	@RequestMapping(value="/selectContentForLevel3ByMenuId",method=RequestMethod.GET)
	@ResponseBody
	public Object selectContentForLevel3ByMenuId(@RequestParam(value="menuId")String menuId) {
		log.info("内容信息模块---Controller---根据菜单ID查询三级内容 ---接收请求对象:menuId{}"+menuId);
		List<Map<String,Object>> mapList=new ArrayList<Map<String,Object>>();
		List<ZkContentInfoData> list=zkContentInfoService.selectContentForLevel3ByMenuId(menuId);
		if(list!=null&&list.size()>0){
			for (ZkContentInfoData zkContentInfoData : list) {
				Map<String, Object>map=new HashMap<String, Object>();
				map.put("id",zkContentInfoData.getId());
				map.put("title",zkContentInfoData.getTitle());
				map.put("content",zkContentInfoData.getContent());
				map.put("long_title",zkContentInfoData.getLong_title());
				map.put("contorder",zkContentInfoData.getContorder());
				map.put("newsfrom",zkContentInfoData.getNewsfrom());
				map.put("pic_src",zkContentInfoData.getPic_src());
				map.put("publicTime",zkContentInfoData.getPublicTime());
				map.put("imgs", zkContentImgService.selectContentImgByContentId(zkContentInfoData.getId()));
				mapList.add(map);
			}
		}
		return mapList;
	}

	
	
	/**
	 * 新闻动态查询相关信息
	 * @author JQchen
	 * @describe 根据菜单ID查询一级内容列表 
	 * @version 2015-11-28 下午12:26:18 
	 * @param menuId
	 * @return
	 */
	@RequestMapping(value="/selectContentNewsInfo",method=RequestMethod.GET)
	@ResponseBody
	public Object selectContentNewsInfo(@RequestParam(value="menuId")String menuId,@RequestParam(value="num")String num) {
		if(num==null){num="0";}
		log.info("内容信息模块---Controller---根据菜单ID查询一级内容 ---接收请求对象:menuId{}"+menuId);	
		List<Map<String,Object>> mapList=new ArrayList<Map<String,Object>>();
		List<ZkContentInfoData> list=zkContentInfoService.selectContentNewsInfo(menuId);
		
		if(list!=null&&list.size()>0){
			if(Integer.valueOf(num)>0){
				list = list.subList(0, Integer.valueOf(num));
			}
			for (ZkContentInfoData zkContentInfoData : list) {
				Map<String, Object>map=new HashMap<String, Object>();
				map.put("id",zkContentInfoData.getId());
				map.put("title",zkContentInfoData.getTitle());
				map.put("content",zkContentInfoData.getContent());
				map.put("long_title",zkContentInfoData.getLong_title());
				map.put("contorder",zkContentInfoData.getContorder());
				map.put("newsfrom",zkContentInfoData.getNewsfrom());
				map.put("publicTime",zkContentInfoData.getPublicTime());
				map.put("imgs", zkContentImgService.selectContentImgByContentId(zkContentInfoData.getId()));
				mapList.add(map);
			}
		}
		return mapList;
	}
	
	
	
	
	/**
	 * 根据菜单id和日期查询信息列表
	 * @param menuId
	 * @param date
	 * @return
	 */
	@RequestMapping(value="/selectContentByMenuIdDate",method=RequestMethod.GET)
	@ResponseBody
	public Object selectContentByMenuIdDate(@RequestParam(value="menuId")String menuId,@RequestParam(value="date")String date) {
		log.info("内容信息模块---Controller---根据菜单ID查询级内容 ---接收请求对象:menuId{}"+menuId);
		List<Map<String,Object>> mapList=new ArrayList<Map<String,Object>>();
		List<ZkContentInfoData> list=zkContentInfoService.selectContentByMenuIdDate(menuId, date);
		if(list!=null&&list.size()>0){
			for (ZkContentInfoData zkContentInfoData : list) {
				Map<String, Object>map=new HashMap<String, Object>();
				map.put("id",zkContentInfoData.getId());
				map.put("title",zkContentInfoData.getTitle());
				map.put("content",zkContentInfoData.getContent());
				map.put("long_title",zkContentInfoData.getLong_title());
				map.put("contorder",zkContentInfoData.getContorder());
				map.put("newsfrom",zkContentInfoData.getNewsfrom());
				map.put("publicTime",zkContentInfoData.getPublicTime());
			    map.put("imgs", zkContentImgService.selectContentImgByContentId(zkContentInfoData.getId()));
				mapList.add(map);
			}
		}
		return mapList;
	}
	
	/**
	 * 描 述：获取3条图片新闻或行业动态 <br/>
	 * 作 者：周志华<br/>
	 * 历 史: (版本)作者 时间 注释 <br/>
	 * @param menuId
	 * @return
	 */
	@RequestMapping(value="/getZkContentInfoList3ById",method=RequestMethod.GET)
	@ResponseBody
	public Object getZkContentInfoList3ById(@RequestParam(value="menuId")String menuId) {
		Map<String,Object> map = new HashMap<String, Object>();
		ZkContentInfo ent = new ZkContentInfo();
		if(!StringUtils.isEmpty(menuId)){
			ent.setMenu_id(menuId);
		}else{
			return null;
		}
		List<ZkContentInfoData> list = zkContentInfoService.getZkContentInfoList3ById(ent);
		log.debug("getZkContentInfoList3ById:"+list);
		if(list!=null&&list.size()>0){
			map.put("List", list);
		}else{
			return null;
		}
		return map;
	}
	
}
