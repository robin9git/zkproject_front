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

import com.rgi.zkhcy.front.common.bean.dataBean.ZkZhProserviceData;
import com.rgi.zkhcy.front.service.service.ZkProserviceService;
import com.rgi.zkhcy.front.web.common.BaseController;

/**
 * 类 名: ZkZhBannerController <br/>
 * 描 述: 描述类完成的主要功能 <br/>
 * 作 者: 周志华 <br/>
 * 创 建： 2016年1月28日 <br/>
 *
 * 历 史: (版本)作者 时间 <br/>
 */
@Controller
@RequestMapping("/zkProService")
public class ZkProServiceController extends BaseController {

	@Autowired
	private ZkProserviceService zkProserviceService;

	/**
	 * 描 述： <br/>
	 * 作 者：周志华<br/>
	 * 历 史: (版本)作者 时间 注释 <br/>
	 * 
	 * @param lang
	 * @return
	 */
	@RequestMapping(value="/getZkProserviceList",method=RequestMethod.GET)
	@ResponseBody
	public Object getZkProserviceList(@RequestParam(value="lang")String lang) {
		Map<String, Object> map = new HashMap<String, Object>();
		List<ZkZhProserviceData> list = zkProserviceService.selectZkProserviceList(lang);
		if (list != null && list.size() > 0) {
//			map.put("List", list);
			map.put("entity", list.get(0));
		}
		return map;
	}
	
}
