package com.rgi.zkhcy.front.module.dao;

import com.rgi.zkhcy.front.common.bean.ZkLogo;
import com.rgi.zkhcy.front.common.bean.dataBean.ZkLogoData;
import com.rgi.zkhcy.front.module.common.BaseDao;
import com.rgi.zkhcy.front.module.common.MyBatisDao;

/**
 * 
 * @ClassName ZkLogoDao
 * @describe logo Dao 
 * @author JQchen
 * @version 2015-11-28 下午12:39:08
 */
@MyBatisDao
public interface ZkEnLogoDao extends BaseDao<ZkLogo, ZkLogoData> {

}
