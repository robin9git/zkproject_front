package com.rgi.zkhcy.front.module.dao;

import com.rgi.zkhcy.front.common.bean.ZkMenu;
import com.rgi.zkhcy.front.common.bean.dataBean.ZkMenuData;
import com.rgi.zkhcy.front.module.common.BaseDao;
import com.rgi.zkhcy.front.module.common.MyBatisDao;

/**
 * 
 * @ClassName ZkMenuDao
 * @describe 中科菜单
 * @author JQchen
 * @version 2015-11-24 下午5:00:28
 */
@MyBatisDao
public interface ZkEnMenuDao extends BaseDao<ZkMenu,ZkMenuData> {

}
