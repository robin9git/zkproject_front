package com.rgi.zkhcy.front.web.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.rgi.zkhcy.front.common.bean.dataBean.ZkRecruitInfoData;
import com.rgi.zkhcy.front.service.service.ZkRecruitInfoService;
import com.rgi.zkhcy.front.web.common.BaseController;

/**
 * 
 * @ClassName ZkRecruitInfoController
 * @describe 招聘信息
 * @author JQchen
 * @version 2015-11-24 下午5:24:36
 */
@Controller
@RequestMapping("/zkRecruitInfo")
public class ZkRecruitInfoController extends BaseController{

	@Autowired
	private ZkRecruitInfoService zkRecruitInfoService;
	
	/**
	 * 
	 * @author JQchen
	 * @describe 获取招聘信息列表
	 * @version 2015-11-26 下午3:36:24 
	 * @return
	 */
	@RequestMapping(value="selectZkRecruitInfoList",method=RequestMethod.GET)
	@ResponseBody
	public Object selectZkRecruitInfoList(){
		List<Map<String,Object>> listMap=new ArrayList<Map<String,Object>>();
		log.info("招聘信息模块---Controller---获取招聘信息列表---接收请求对象");
		List<ZkRecruitInfoData> list=zkRecruitInfoService.selectZkRecruitInfoList();
		if(list!=null&&list.size()>0){
			for (ZkRecruitInfoData data : list) {
				Map<String,Object> map=new HashMap<String,Object>();
				map.put("id", data.getId());
				map.put("category", data.getCategory());
				map.put("job_title", data.getJob_title());
				map.put("spec_orentation", data.getSpec_orentation());
				map.put("required", data.getRequired());
				map.put("rec_num", data.getRec_num());
				listMap.add(map);
			}
		}
		return listMap;
	}
}
