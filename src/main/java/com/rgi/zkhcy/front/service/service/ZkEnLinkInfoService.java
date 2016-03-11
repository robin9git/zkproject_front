package com.rgi.zkhcy.front.service.service;

import java.util.List;

import com.rgi.zkhcy.front.common.bean.dataBean.ZkLinkInfoData;

/**
 * 
 * @ClassName ZkLinkInfoService
 * @describe 友情链接 
 * @author JQchen
 * @version 2015-11-24 下午4:56:18
 */
public interface ZkEnLinkInfoService {
	
	/**
	 * 
	 * @author JQchen
	 * @describe 通过ID查询对象 
	 * @version 2015-11-24 下午5:08:47 
	 * @param id
	 * @return
	 */
	public ZkLinkInfoData selectZkLinkInfoById(Object id);
	
	/**
	 * 
	 * @author JQchen
	 * @describe 查询友情链接列表
	 * @version 2015-11-26 下午2:44:11 
	 * @return
	 */
	public List<ZkLinkInfoData> selectZklinkInfoList();
}
