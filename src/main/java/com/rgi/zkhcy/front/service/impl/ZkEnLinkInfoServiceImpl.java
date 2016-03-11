package com.rgi.zkhcy.front.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.rgi.zkhcy.front.common.bean.dataBean.ZkLinkInfoData;
import com.rgi.zkhcy.front.module.dao.ZkEnLinkInfoDao;
import com.rgi.zkhcy.front.service.common.BaseService;
import com.rgi.zkhcy.front.service.service.ZkEnLinkInfoService;

/**
 * 
 * @ClassName ZkLinkInfoServiceImpl
 * @describe 友情链接
 * @author JQchen
 * @version 2015-11-24 下午4:56:53
 */
@Service
@Transactional(readOnly=true)
public class ZkEnLinkInfoServiceImpl extends BaseService implements ZkEnLinkInfoService {

	@Autowired
	private ZkEnLinkInfoDao zkEnLinkInfoDao;
	/**
	 * 
	 * @author JQchen
	 * @describe 通过ID查询对象 
	 * @version 2015-11-24 下午5:08:47 
	 * @param id
	 * @return
	 */
	@Override
	public ZkLinkInfoData selectZkLinkInfoById(Object id) {
		log.info("友情链接模块---根据主键查询友情链接---接收请求对象:id{}"+id);
		return zkEnLinkInfoDao.queryById(id);
	}
	/**
	 * 
	 * @author JQchen
	 * @describe 查询友情链接列表
	 * @version 2015-11-26 下午2:44:11 
	 * @return
	 */
	@Override
	public List<ZkLinkInfoData> selectZklinkInfoList() {
		log.info("友情链接模块---查询友情链接列表---接收请求对象");
		return zkEnLinkInfoDao.queryAllList();
	}

}
