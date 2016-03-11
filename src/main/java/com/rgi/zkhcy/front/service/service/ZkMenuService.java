package com.rgi.zkhcy.front.service.service;

import java.util.List;
import java.util.Map;

import com.rgi.zkhcy.front.common.bean.dataBean.ZkMenuData;

/**
 * 
 * @ClassName ZkMenuService
 * @describe 中科菜单
 * @author JQchen
 * @version 2015-11-24 下午4:58:41
 */
public interface ZkMenuService {

	/**
	 * 
	 * @author JQchen
	 * @describe 通过ID查询对象 
	 * @version 2015-11-24 下午5:08:47 
	 * @param id
	 * @return
	 */
	public ZkMenuData selectZkMenuById(Object id);
	
	/**
	 * 
	 * @author JQchen
	 * @describe 获取首部菜单列表 
	 * @version 2015-11-24 下午6:28:27 
	 * @return
	 */
	public List<Map<String, Object>> selectHeadMenuListByType();
	
	/**
	 * 
	 * @author JQchen
	 * @describe 根据父菜单ID查询其他菜单 
	 * @version 2015-11-24 下午6:30:03 
	 * @param parentId
	 * @return
	 */
	public List<Map<String, Object>> selectOtherMenuListByParentId(String parentId);
	
	/**
	 * 
	 * @author JQchen
	 * @describe 根据父菜单ID查询首部菜单列表
	 * @version 2015-11-24 下午6:31:24 
	 * @param parentId
	 * @return
	 */
	public List<Map<String, Object>> selectHeadMenuByParentId(String parentId);
	
	/**
	 * 
	 * @author JQchen
	 * @describe 获取底部菜单列表 
	 * @version 2015-11-24 下午6:28:27 
	 * @return
	 */
	public List<Map<String, Object>> selectFootMenuListByType();
	
	
	
	/**
	 * 
	 * @author JQchen
	 * @describe 根据父菜单ID查询其他菜单 
	 * @version 2015-11-24 下午6:30:03 
	 * @param parentId
	 * @return
	 */
	public List<ZkMenuData> selectMenuListByParentId(String parentId);
	
}
