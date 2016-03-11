package com.rgi.zkhcy.front.service.service;

import java.util.List;

import com.rgi.zkhcy.front.common.bean.dataBean.ZkCompInfoData;

/**
 * 
 * @ClassName ZkCompInfoService
 * @describe 公司信息
 * @author JQchen
 * @version 2015-11-24 下午5:08:18
 */
public interface ZkEnCompInfoService {
	
	/**
	 * 
	 * @author JQchen
	 * @describe 通过ID查询对象 
	 * @version 2015-11-24 下午5:08:47 
	 * @param id
	 * @return
	 */
	public ZkCompInfoData selectZkCompInfoById(Object id);
	
	/**
	 * 
	 * @author JQchen
	 * @describe 获取公司信息列表 
	 * @version 2015-11-26 上午11:31:00 
	 * @return
	 */
	public List<ZkCompInfoData> selectZkCompInfoList();
}
