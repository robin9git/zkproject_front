package com.rgi.zkhcy.front.service.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.rgi.zkhcy.front.common.bean.ZkContentImg;
import com.rgi.zkhcy.front.common.bean.ZkContentInfo;
import com.rgi.zkhcy.front.common.bean.dataBean.ZkContentImgData;
import com.rgi.zkhcy.front.common.bean.dataBean.ZkContentInfoData;
import com.rgi.zkhcy.front.common.util.BeanUtils;
import com.rgi.zkhcy.front.common.util.DateUtil;
import com.rgi.zkhcy.front.common.util.ZkContentInfoUtil;
import com.rgi.zkhcy.front.module.dao.ZkContentImgDao;
import com.rgi.zkhcy.front.module.dao.ZkContentInfoDao;
import com.rgi.zkhcy.front.service.common.BaseService;
import com.rgi.zkhcy.front.service.service.ZkContentImgService;
import com.rgi.zkhcy.front.service.service.ZkContentInfoService;

/**
 * 
 * @ClassName ZkContentInfoServiceImpl
 * @describe 内容信息
 * @author JQchen
 * @version 2015-11-24 下午4:54:52
 */
@Service
@Transactional(readOnly=true)
public class ZkContentImgServiceImpl extends BaseService implements ZkContentImgService {

	@Autowired
	private ZkContentImgDao zkContentImgDao;
	
	/**
	 * 
	 * @author JQchen
	 * @describe 通过ID查询对象 
	 * @version 2015-11-24 下午5:08:47 
	 * @param id
	 * @return
	 */
	public ZkContentImgData selectZkContentImgById(String id){
		return zkContentImgDao.queryById(id);
	}
	
	/**
	 * 
	 * @author JQchen
	 * @describe 根据信息ID查询图片列表
	 * @version 2015-11-28 下午12:26:18 
	 * @param menuId
	 * @return
	 */
	public List<String> selectContentImgByContentId(String contentId){
		ZkContentImg m = new ZkContentImg();
		m.setContent_id(contentId);
		List<String> relist = new ArrayList<String>();
		List<ZkContentImgData> list = zkContentImgDao.queryListByObject(m);
		if(list != null && list.size()>0){
			for(ZkContentImgData zk :list){
				relist.add(zk.getImg_url());
			}
		}
	    return relist;
		
	}

}
