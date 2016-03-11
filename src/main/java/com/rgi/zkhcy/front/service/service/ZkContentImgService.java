package com.rgi.zkhcy.front.service.service;

import java.util.List;

import com.rgi.zkhcy.front.common.bean.dataBean.ZkContentImgData;

/**
 * 
 * @ClassName ZkContentImgService
 * @describe 内容信息
 * @author JQchen
 * @version 2015-11-24 下午4:53:47
 */
public interface ZkContentImgService {
	
	/**
	 * 
	 * @author JQchen
	 * @describe 通过ID查询对象 
	 * @version 2015-11-24 下午5:08:47 
	 * @param id
	 * @return
	 */
	public ZkContentImgData selectZkContentImgById(String id);
	
	/**
	 * 
	 * @author JQchen
	 * @describe 根据信息ID查询图片列表
	 * @version 2015-11-28 下午12:26:18 
	 * @param menuId
	 * @return
	 */
	public List<String> selectContentImgByContentId(String contentId);

}
