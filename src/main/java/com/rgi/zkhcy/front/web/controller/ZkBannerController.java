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

import com.rgi.zkhcy.front.common.bean.dataBean.ZkZhBannerData;
import com.rgi.zkhcy.front.service.service.ZkBannerService;
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
@RequestMapping("/zkBanner")
public class ZkBannerController extends BaseController {

	@Autowired
	private ZkBannerService zkBannerService;

	/**
	 * 描 述： <br/>
	 * 作 者：周志华<br/>
	 * 历 史: (版本)作者 时间 注释 <br/>
	 * 
	 * @param lang
	 * @return
	 */
	@RequestMapping(value="/getZkBannerList",method=RequestMethod.GET)
	@ResponseBody
	public Object getZkBannerList(@RequestParam(value="lang")String lang) {
		Map<String, Object> map = new HashMap<String, Object>();
		List<ZkZhBannerData> list = zkBannerService.selectZkBnanerList(lang);
		if (list != null && list.size() > 0) {
			map.put("List", list);
		}
		return map;
	}
}
