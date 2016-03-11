package com.rgi.zkhcy.front.web.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.rgi.zkhcy.front.common.bean.ZkAttachment;
import com.rgi.zkhcy.front.common.bean.dataBean.ZkAttachmentData;
import com.rgi.zkhcy.front.service.service.ZkAttachmentSerivce;
import com.rgi.zkhcy.front.service.service.ZkCommonSerivce;
import com.rgi.zkhcy.front.web.common.BaseController;

/** 
 * 类 名: ZkCommonController <br/>
 * 描 述: 共通工具Controller <br/>
 * 作 者: 周志华 <br/>
 * 创 建： 2015年12月23日 <br/>
 *
 * 历 史: (版本)作者 时间 <br/>
 */
@Controller
@RequestMapping("/zkCommon")
public class ZkCommonController extends BaseController {
	
	@Autowired
	private ZkCommonSerivce zkCommonSerivce;
	
	@Autowired
	private ZkAttachmentSerivce zkAttachmentSerivce;

	/**
	 * 描 述：根据参数，取不同位置的PDF文件 <br/>
	 * 作 者：周志华<br/>
	 * 历 史: (版本)作者 时间 注释 <br/>
	 * @param param
	 * @return
	 */
	@RequestMapping(value="/getPDF",method=RequestMethod.GET)
	@ResponseBody
	public Object getPDF(@RequestParam(value="param")String param,HttpServletRequest req) {
		log.info("文件模块---Controller---获取煤海油金列表 ---接收请求对象");
		List<Map<String,Object>> mapList=new ArrayList<Map<String,Object>>();
		if(StringUtils.isEmpty(param)){
			return mapList;
		}
		
		ZkAttachment ent = new ZkAttachment();
		ent.setMenu(param);
		
		//按照年份取数据
		String year = req.getParameter("year");
		if(!StringUtils.isEmpty(year)){
			ent.setYear(year);
		}
		
		List<ZkAttachmentData> list=zkCommonSerivce.getPDF(ent);
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
	 * 描 述：获取附件日期列表 <br/>
	 * 作 者：周志华<br/>
	 * 历 史: (版本)作者 时间 注释 <br/>
	 * @param menu
	 * @return
	 */
	@RequestMapping(value="/getDateByMenu",method=RequestMethod.GET)
	@ResponseBody
	public Object  getDateByMenu(@RequestParam(value="menu")String menu) {
		log.info("文件模块---Controller---获取附件日期列表  ---接收请求对象-- menu:"+menu);
		List<Map<String,Object>> mapList=new ArrayList<Map<String,Object>>();
		ZkAttachment entity = new ZkAttachment();
		if(!StringUtils.isEmpty(menu)){
			entity.setMenu(menu);
		}else{
			return mapList;
		}
		List<ZkAttachmentData> list=zkCommonSerivce.queryDateByMenu(entity);
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
	
}
