package com.rgi.zkhcy.front.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.rgi.zkhcy.front.common.bean.dataBean.ZkRecruitInfoData;
import com.rgi.zkhcy.front.module.dao.ZkRecruitInfoDao;
import com.rgi.zkhcy.front.service.common.BaseService;
import com.rgi.zkhcy.front.service.service.ZkRecruitInfoService;

/**
 * 
 * @ClassName ZkRecruitInfoServiceImpl
 * @describe 招聘信息
 * @author JQchen
 * @version 2015-11-24 下午5:04:54
 */
@Service
@Transactional(readOnly=true)
public class ZkRecruitInfoServiceImpl extends BaseService implements ZkRecruitInfoService {

	@Autowired
	private ZkRecruitInfoDao zkRecruitInfoDao;
	/**
	 * 
	 * @author JQchen
	 * @describe 通过ID查询对象 
	 * @version 2015-11-24 下午5:08:47 
	 * @param id
	 * @return
	 */
	@Override
	public ZkRecruitInfoData selectZkRecruitInfoById(Object id) {
		log.info("招聘信息模块---根据主键查询招聘信息---接收请求对象:id{}"+id);
		return zkRecruitInfoDao.queryById(id);
	}
	
	/**
	 * 
	 * @author JQchen
	 * @describe 获取招聘信息列表
	 * @version 2015-11-26 下午3:30:21 
	 * @return
	 */
	@Override
	public List<ZkRecruitInfoData> selectZkRecruitInfoList() {
		log.info("招聘信息模块---获取招聘信息列表---接收请求对象");
		return zkRecruitInfoDao.queryAllList();
	}

}
