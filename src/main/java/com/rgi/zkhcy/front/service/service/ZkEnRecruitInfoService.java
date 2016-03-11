package com.rgi.zkhcy.front.service.service;

import java.util.List;

import com.rgi.zkhcy.front.common.bean.dataBean.ZkRecruitInfoData;

/**
 * 
 * @ClassName ZkRecruitInfoService
 * @describe 招聘信息
 * @author JQchen
 * @version 2015-11-24 下午5:04:01
 */
public interface ZkEnRecruitInfoService {
	
	/**
	 * 
	 * @author JQchen
	 * @describe 通过ID查询对象 
	 * @version 2015-11-24 下午5:08:47 
	 * @param id
	 * @return
	 */
	public ZkRecruitInfoData selectZkRecruitInfoById(Object id);
	
	/**
	 * 
	 * @author JQchen
	 * @describe 获取招聘信息列表
	 * @version 2015-11-26 下午3:30:21 
	 * @return
	 */
	public List<ZkRecruitInfoData> selectZkRecruitInfoList();
}
