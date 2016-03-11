package com.rgi.zkhcy.front.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.rgi.zkhcy.front.common.bean.dataBean.ZkCompInfoData;
import com.rgi.zkhcy.front.module.dao.ZkEnCompInfoDao;
import com.rgi.zkhcy.front.service.common.BaseService;
import com.rgi.zkhcy.front.service.service.ZkEnCompInfoService;

/**
 * 
 * @ClassName ZkCompInfoServiceImpl
 * @describe 公司信息
 * @author JQchen
 * @version 2015-11-24 下午5:08:31
 */
@Service
@Transactional(readOnly=true)
public class ZkEnCompInfoServiceImpl extends BaseService implements ZkEnCompInfoService{

	@Autowired
	private ZkEnCompInfoDao zkEnCompInfoDao;
	/**
	 * 
	 * @author JQchen
	 * @describe 通过ID查询对象 
	 * @version 2015-11-24 下午5:08:47 
	 * @param id
	 * @return
	 */
	@Override
	public ZkCompInfoData selectZkCompInfoById(Object id) {
		log.info("公司信息模块---根据主键查询公司信息---接收请求对象:id{}"+id);
		return zkEnCompInfoDao.queryById(id);
	}
	/**
	 * 
	 * @author JQchen
	 * @describe 获取公司信息列表 
	 * @version 2015-11-26 上午11:31:00 
	 * @return
	 */
	@Override
	public List<ZkCompInfoData> selectZkCompInfoList() {
		log.info("公司信息模块---获取公司信息列表 ---接收请求对象");
		return zkEnCompInfoDao.queryAllList();
	}

}
