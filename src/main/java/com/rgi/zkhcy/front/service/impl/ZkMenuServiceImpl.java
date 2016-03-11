package com.rgi.zkhcy.front.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.rgi.zkhcy.front.common.bean.ZkMenu;
import com.rgi.zkhcy.front.common.bean.dataBean.ZkMenuData;
import com.rgi.zkhcy.front.common.util.ZkMenuUtil;
import com.rgi.zkhcy.front.module.dao.ZkMenuDao;
import com.rgi.zkhcy.front.service.common.BaseService;
import com.rgi.zkhcy.front.service.service.ZkMenuService;

/**
 * 
 * @ClassName ZkMenuServiceImpl
 * @describe 中科菜单
 * @author JQchen
 * @version 2015-11-24 下午5:00:08
 */
@Service
@Transactional(readOnly=true)
public class ZkMenuServiceImpl extends BaseService implements ZkMenuService {

	@Autowired
	private ZkMenuDao zkMenuDao;
	
//	private List<Map<String, Object>> dataMapList=new ArrayList<Map<String, Object>>();
	/**
	 * 
	 * @author JQchen
	 * @describe 通过ID查询对象 
	 * @version 2015-11-24 下午5:08:47 
	 * @param id
	 * @return
	 */
	@Override
	public ZkMenuData selectZkMenuById(Object id) {
		log.info("中科菜单模块---根据主键查询中科菜单---接收请求对象:id{}"+id);
		return zkMenuDao.queryById(id);
	}
	/**
	 * 
	 * @author JQchen
	 * @describe 获取首部菜单列表 
	 * @version 2015-11-24 下午6:28:27 
	 * @return
	 */
	@Override
	public List<Map<String, Object>> selectHeadMenuListByType() {
		List<Map<String, Object>> dataMapList=new ArrayList<Map<String, Object>>();
		log.info("中科菜单模块---获取首部菜单列表 ---接收请求对象");
		ZkMenu zkMenu=new ZkMenu();
		//根据父ID 菜单类型查询菜单list 查询顶级菜单列表
		zkMenu.setParentfunctionid("isHead");//设置顶级父类，isHead为查询条件，实现parentfunctionid is null or parentfunctionid=''查询
		zkMenu.setShow_type(ZkMenuUtil.SHOW_TYPE_14);
		List<ZkMenuData> headMenuList=zkMenuDao.queryListByObject(zkMenu);
		if(headMenuList!=null&&headMenuList.size()>0){
			//声明新的子菜单列表
			dataMapList=new ArrayList<Map<String, Object>>();
			for (ZkMenuData m: headMenuList) {
				Map<String, Object> datamap=new HashMap<String, Object>();
				//将顶级菜单对象添加到map：菜单id为key ,菜单对象调用递归方法 获取所有的子菜单列表 为value
				datamap.put("id", m.getId());
				datamap.put("functionname", m.getFunctionname());
				datamap.put("subList",getSubData(m,ZkMenuUtil.SHOW_TYPE_14).getSubList());
				dataMapList.add(datamap);
			}
		}
		return dataMapList;
	}
	/**
	 * 
	 * @author JQchen
	 * @describe 获取底部菜单列表 
	 * @version 2015-11-24 下午6:28:27 
	 * @return
	 */
	@Override
	public List<Map<String, Object>> selectFootMenuListByType() {
		List<Map<String, Object>> dataMapList=new ArrayList<Map<String, Object>>();
		log.info("中科菜单模块---获取底部菜单列表---接收请求对象");
		ZkMenu zkMenu=new ZkMenu();
		//根据父ID 菜单类型查询菜单list 查询顶级菜单列表
		zkMenu.setParentfunctionid("isHead");//设置顶级父类，isHead为查询条件，实现parentfunctionid is null or parentfunctionid=''查询
		zkMenu.setShow_type(ZkMenuUtil.SHOW_TYPE_24);
		List<ZkMenuData> headMenuList=zkMenuDao.queryListByObject(zkMenu);
		if(headMenuList!=null&&headMenuList.size()>0){
			//声明新的子菜单列表
			for (ZkMenuData m: headMenuList) {
				Map<String, Object> datamap=new HashMap<String, Object>();
				//将顶级菜单对象添加到map：菜单id为key ,菜单对象调用递归方法 获取所有的子菜单列表 为value
				datamap.put("id", m.getId());
				datamap.put("functionname", m.getFunctionname());
				List<ZkMenuData> sublist=getSubData(m,ZkMenuUtil.SHOW_TYPE_24).getSubList();
				//如果下级获取不到子列表 获取更下级列表
				if(sublist==null||sublist.size()<1){
					List<ZkMenuData> ssublist=getFootSubData(m.getId(),new ArrayList<ZkMenuData>());
					datamap.put("subList",ssublist);
				}else{
					//获取到子列表 在获取更下级菜单
					sublist.addAll(getFootSubData(m.getId(),new ArrayList<ZkMenuData>()));
					datamap.put("subList",sublist);
				}
				dataMapList.add(datamap);
			}
		}
		return dataMapList;
	}

	//获取更下级底部子菜单列表
	public List<ZkMenuData> getFootSubData(String parentId,List<ZkMenuData> ssublist){
		ZkMenu menu=new ZkMenu();
		menu.setParentfunctionid(parentId);
		List<ZkMenuData> menuList=zkMenuDao.queryListByObject(menu);
		if(menuList!=null&&menuList.size()>0){
			for (ZkMenuData data : menuList) {
				ssublist.addAll(getSubData(data,ZkMenuUtil.SHOW_TYPE_24).getSubList());
			}
		}
		return ssublist;
	}
	/**
	 * 
	 * @author JQchen
	 * @describe 根据菜单对象递归添加所有的子菜单list 
	 * @version 2015-11-25 下午3:29:58 
	 * @param m 添加前的菜单对象
	 * @param show_type 菜单类型
	 * @return 添加后的菜单对象
	 */
	private ZkMenuData getSubData(ZkMenuData m,Integer show_type){
		ZkMenu zkMenu=new ZkMenu();
		//根据父ID 菜单类型查询菜单list 查询子菜单列表
		zkMenu.setParentfunctionid(m.getId());
		zkMenu.setShow_type(show_type);
		List<ZkMenuData> headMenuList=zkMenuDao.queryListByObject(zkMenu);
		if(headMenuList!=null&&headMenuList.size()>0){
			//菜单对象添加子菜单list
			m.setSubList(headMenuList);
			for (ZkMenuData menu : headMenuList) {
				//调用自身 继续添加自身下级菜单list
				getSubData(menu, show_type);
			}
		}
		return m;
	}

	/**
	 * 
	 * @author JQchen
	 * @describe 根据父菜单ID查询其他菜单 
	 * @version 2015-11-24 下午6:30:03 
	 * @param parentId
	 * @return
	 */
	@Override
	public List<Map<String, Object>> selectOtherMenuListByParentId(String parentId) {
		List<Map<String, Object>> dataMapList=new ArrayList<Map<String, Object>>();
		log.info("中科菜单模块--- 根据父菜单ID查询其他菜单 ---接收请求对象:parentId{}"+parentId);
		ZkMenuData menu=zkMenuDao.queryById(parentId);
		if(menu!=null){
			Map<String,Object> map=new HashMap<String, Object>();
			map.put("id", menu.getId());
			map.put("functionname", menu.getFunctionname());
			map.put("subList",getSubData(menu,ZkMenuUtil.SHOW_TYPE3).getSubList());
			dataMapList.add(map);
		}
		return dataMapList;
	}
	/**
	 * 
	 * @author JQchen
	 * @describe 根据父菜单ID查询首部菜单列表
	 * @version 2015-11-24 下午6:31:24 
	 * @param parentId
	 * @return
	 */
	@Override
	public List<Map<String, Object>> selectHeadMenuByParentId(String parentId) {
		List<Map<String, Object>> dataMapList=new ArrayList<Map<String, Object>>();
		log.info("中科菜单模块---根据父菜单ID查询首部菜单列表---接收请求对象:parentId{}"+parentId);
		ZkMenuData menu=zkMenuDao.queryById(parentId);
		if(menu!=null){
			Map<String,Object> map=new HashMap<String, Object>();
			map.put("id", menu.getId());
			map.put("functionname", menu.getFunctionname());
			map.put("subList",getSubData(menu,ZkMenuUtil.SHOW_TYPE_14).getSubList());
			dataMapList.add(map);
		}
		return dataMapList;
	}
	
	
	
	/**
	 * 
	 * @author JQchen
	 * @describe 根据父菜单ID查询其他菜单 
	 * @version 2015-11-24 下午6:30:03 
	 * @param parentId
	 * @return
	 */
	public List<ZkMenuData> selectMenuListByParentId(String parentId){
		ZkMenu zkMenu=new ZkMenu();
		//根据父ID \
		zkMenu.setParentfunctionid(parentId);
		return zkMenuDao.queryListByObject(zkMenu);
	}


}
