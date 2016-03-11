package com.rgi.zkhcy.front.web.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.rgi.zkhcy.front.common.bean.dataBean.ZkAttachmentData;
import com.rgi.zkhcy.front.common.util.ZkAttachmentUtil;
import com.rgi.zkhcy.front.service.service.ZkEnAttachmentSerivce;
import com.rgi.zkhcy.front.web.common.BaseController;

/**
 * 
 * @ClassName ZkAttachmentController
 * @describe 文件Controller 
 * @author JQchen
 * @version 2015-11-27 下午3:41:47
 */
@Controller
@RequestMapping("/zkEnAttachment")
public class ZkEnAttachmentController extends BaseController {
	@Autowired
	private ZkEnAttachmentSerivce zkEnAttachmentSerivce;
	
	/**
	 * 
	 * @author JQchen
	 * @describe 获取首页视频列表 
	 * @version 2015-11-27 下午4:28:17 
	 * @return
	 */
	@RequestMapping(value="/getIndexVideoList",method=RequestMethod.GET)
	@ResponseBody
	public Object  getIndexVideoList() {
		log.info("文件模块---Controller---获取首页视频列表---接收请求对象");
		List<Map<String,Object>> mapList=new ArrayList<Map<String,Object>>();
		List<ZkAttachmentData> list=zkEnAttachmentSerivce.getIndexVideoList();
		if(list!=null&&list.size()>0){
			for (int i = 0; i < list.size(); i++) {
				if(i<ZkAttachmentUtil.INDEXVIDEOCOUNT){
					Map<String,Object> map=new HashMap<String, Object>();
					map.put("id", list.get(i).getId());
					map.put("year", list.get(i).getYear());
					map.put("title1", list.get(i).getTitle1());
					map.put("title2", list.get(i).getTitle2());
					map.put("picsrc", list.get(i).getPicsrc());
					map.put("filesrc", list.get(i).getFilesrc());
					map.put("des", list.get(i).getDes());
					map.put("filesize", list.get(i).getFilesize());
					map.put("filstype", list.get(i).getFilstype());
					mapList.add(map);
				}
			}
		}
		return mapList;
	}

	/**
	 * 
	 * @author JQchen
	 * @describe 获取合成油报列表 
	 * @version 2015-11-27 下午4:28:17 
	 * @return
	 */
	@RequestMapping(value="/getIndexMenu1List",method=RequestMethod.GET)
	@ResponseBody
	public Object getIndexMenu1List(@RequestParam(value="year")String year) {
		log.info("文件模块---Controller---获取合成油报列表 ---接收请求对象");
		List<Map<String,Object>> mapList=new ArrayList<Map<String,Object>>();
		List<ZkAttachmentData> list=zkEnAttachmentSerivce.getIndexMenu1List(year);
		if(list!=null&&list.size()>0){
			for (ZkAttachmentData zkAttachmentData : list) {
				Map<String,Object> map=new HashMap<String, Object>();
				map.put("id", zkAttachmentData.getId());
				map.put("year", zkAttachmentData.getYear());
				map.put("title1", zkAttachmentData.getTitle1());
				map.put("title2", zkAttachmentData.getTitle2());
				map.put("picsrc", zkAttachmentData.getPicsrc());
				map.put("filesrc", zkAttachmentData.getFilesrc());
				map.put("des", zkAttachmentData.getDes());
				map.put("filesize", zkAttachmentData.getFilesize());
				map.put("filstype", zkAttachmentData.getFilstype());
				mapList.add(map);
			}
		}
		return mapList;
	}

	/**
	 * 
	 * @author JQchen
	 * @describe 获取合成油世界列表 
	 * @version 2015-11-27 下午4:28:17 
	 * @return
	 */
	@RequestMapping(value="/getIndexMenu2List",method=RequestMethod.GET)
	@ResponseBody
	public Object  getIndexMenu2List() {
		log.info("文件模块---Controller---获取合成油世界列表  ---接收请求对象");
		List<Map<String,Object>> mapList=new ArrayList<Map<String,Object>>();
		List<ZkAttachmentData> list=zkEnAttachmentSerivce.getIndexMenu2List();
		if(list!=null&&list.size()>0){
			for (ZkAttachmentData zkAttachmentData : list) {
				Map<String,Object> map=new HashMap<String, Object>();
				map.put("id", zkAttachmentData.getId());
				map.put("year", zkAttachmentData.getYear());
				map.put("title1", zkAttachmentData.getTitle1());
				map.put("title2", zkAttachmentData.getTitle2());
				map.put("picsrc", zkAttachmentData.getPicsrc());
				map.put("filesrc", zkAttachmentData.getFilesrc());
				map.put("des", zkAttachmentData.getDes());
				map.put("filesize", zkAttachmentData.getFilesize());
				map.put("filstype", zkAttachmentData.getFilstype());
				mapList.add(map);
			}
		}
		return mapList;
	}
	
	
	
	
	/**
	 * 
	 * @author JQchen
	 * @describe 获取合成油世界列表 
	 * @version 2015-11-27 下午4:28:17 
	 * @return
	 */
	@RequestMapping(value="/getMenuDate",method=RequestMethod.GET)
	@ResponseBody
	public Object  getMenuDate() {
		log.info("文件模块---Controller---获取合成油世界列表  ---接收请求对象");
		List<Map<String,Object>> mapList=new ArrayList<Map<String,Object>>();
		List<ZkAttachmentData> list=zkEnAttachmentSerivce.queryByMenu();
		if(list!=null&&list.size()>0){
			for (ZkAttachmentData zkAttachmentData : list) {
				Map<String,Object> map=new HashMap<String, Object>();
				map.put("id", zkAttachmentData.getId());
				map.put("year", zkAttachmentData.getYear());
				mapList.add(map);
			}
		}
		return mapList;
	}
	

	/**
	 * 
	 * @author JQchen
	 * @describe 获取文章及出版物列表 
	 * @version 2015-11-27 下午4:28:17 
	 * @return
	 */
	@RequestMapping(value="/getIndexMenu3List",method=RequestMethod.GET)
	@ResponseBody
	public Object  getIndexMenu3List() {
		log.info("文件模块---Controller---获取文章及出版物列表  ---接收请求对象");
		List<Map<String,Object>> mapList=new ArrayList<Map<String,Object>>();
		List<ZkAttachmentData> list=zkEnAttachmentSerivce.getIndexMenu3List();
		if(list!=null&&list.size()>0){
			for (ZkAttachmentData zkAttachmentData : list) {
				Map<String,Object> map=new HashMap<String, Object>();
				map.put("id", zkAttachmentData.getId());
				map.put("year", zkAttachmentData.getYear());
				map.put("title1", zkAttachmentData.getTitle1());
				map.put("title2", zkAttachmentData.getTitle2());
				map.put("picsrc", zkAttachmentData.getPicsrc());
				map.put("filesrc", zkAttachmentData.getFilesrc());
				map.put("des", zkAttachmentData.getDes());
				map.put("filesize", zkAttachmentData.getFilesize());
				map.put("filstype", zkAttachmentData.getFilstype());
				mapList.add(map);
			}
		}
		return mapList;
	}

	/**
	 * 
	 * @author JQchen
	 * @describe 获取煤海油金列表 
	 * @version 2015-11-27 下午4:28:17 
	 * @return
	 */
	@RequestMapping(value="/getIndexMenu5List",method=RequestMethod.GET)
	@ResponseBody
	public Object getIndexMenu5List() {
		log.info("文件模块---Controller---获取煤海油金列表 ---接收请求对象");
		List<Map<String,Object>> mapList=new ArrayList<Map<String,Object>>();
		List<ZkAttachmentData> list=zkEnAttachmentSerivce.getIndexMenu5List();
		if(list!=null&&list.size()>0){
			for (ZkAttachmentData zkAttachmentData : list) {
				Map<String,Object> map=new HashMap<String, Object>();
				map.put("id", zkAttachmentData.getId());
				map.put("year", zkAttachmentData.getYear());
				map.put("title1", zkAttachmentData.getTitle1());
				map.put("title2", zkAttachmentData.getTitle2());
				map.put("picsrc", zkAttachmentData.getPicsrc());
				map.put("filesrc", zkAttachmentData.getFilesrc());
				map.put("des", zkAttachmentData.getDes());
				map.put("filesize", zkAttachmentData.getFilesize());
				map.put("filstype", zkAttachmentData.getFilstype());
				mapList.add(map);
			}
		}
		return mapList;
	}
}
