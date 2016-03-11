package com.rgi.zkhcy.front.web.controller;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.common.base.Predicate;
import com.google.common.collect.Collections2;
import com.google.common.collect.ImmutableMap;
import com.google.common.collect.Lists;
import com.rgi.zkhcy.front.common.bean.dataBean.ZkLinkInfoData;
import com.rgi.zkhcy.front.common.util.ZkLinkInfoUtil;
import com.rgi.zkhcy.front.service.service.ZkLinkInfoService;
import com.rgi.zkhcy.front.web.common.BaseController;

/**
 * 
 * @ClassName ZkLinkInfoController
 * @describe 友情链接
 * @author JQchen
 * @version 2015-11-24 下午5:23:37
 */
@Controller
@RequestMapping("/zkLinkInfo")
public class ZkLinkInfoController extends BaseController {

	@Autowired
	private ZkLinkInfoService zkLinkInfoService;

	/**
	 * 
	 * @author JQchen
	 * @describe 获得友情链接列表
	 * @version 2015-11-26 下午2:58:41
	 * @return
	 */
	@SuppressWarnings("rawtypes")
	@RequestMapping(value="/selectZkLinkInfoList",method=RequestMethod.GET)
	@ResponseBody
	public Object selectZkLinkInfoList() {
		List<ImmutableMap<String, Collection>> listMap = new ArrayList<ImmutableMap<String, Collection>>();
		log.info("友情链接模块---Controller---获得友情链接列表---接收请求对象");
		List<ZkLinkInfoData> list = zkLinkInfoService.selectZklinkInfoList();
		if (list != null && list.size() > 0) {
			for (final Integer category : Lists.newArrayList(ZkLinkInfoUtil.CATEGROY_10,ZkLinkInfoUtil.CATEGROY_20, ZkLinkInfoUtil.CATEGROY_30,ZkLinkInfoUtil.CATEGROY_40)) {
				Collection links = Collections2.filter(list, new Predicate<ZkLinkInfoData>() {
							@Override
							public boolean apply(ZkLinkInfoData input) {
								return input.getCategory() == category;
							}
						});
				listMap.add(ImmutableMap.of("list", links));
			}
		}
		return listMap;
	}

}
