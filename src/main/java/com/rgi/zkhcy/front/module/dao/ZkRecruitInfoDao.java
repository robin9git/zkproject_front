package com.rgi.zkhcy.front.module.dao;

import com.rgi.zkhcy.front.common.bean.ZkRecruitInfo;
import com.rgi.zkhcy.front.common.bean.dataBean.ZkRecruitInfoData;
import com.rgi.zkhcy.front.module.common.BaseDao;
import com.rgi.zkhcy.front.module.common.MyBatisDao;

/**
 * 
 * @ClassName ZkRecruitInfoDao
 * @describe 招聘信息
 * @author JQchen
 * @version 2015-11-24 下午5:05:09
 */
@MyBatisDao
public interface ZkRecruitInfoDao extends BaseDao<ZkRecruitInfo,ZkRecruitInfoData> {

}
