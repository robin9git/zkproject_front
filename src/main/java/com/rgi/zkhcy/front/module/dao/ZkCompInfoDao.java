package com.rgi.zkhcy.front.module.dao;

import com.rgi.zkhcy.front.common.bean.ZkCompInfo;
import com.rgi.zkhcy.front.common.bean.dataBean.ZkCompInfoData;
import com.rgi.zkhcy.front.module.common.BaseDao;
import com.rgi.zkhcy.front.module.common.MyBatisDao;

/**
 * 
 * @ClassName ZkCompInfoDao
 * @describe 公司信息
 * @author JQchen
 * @version 2015-11-24 下午5:08:05
 */
@MyBatisDao
public interface ZkCompInfoDao extends BaseDao<ZkCompInfo,ZkCompInfoData> {

}
