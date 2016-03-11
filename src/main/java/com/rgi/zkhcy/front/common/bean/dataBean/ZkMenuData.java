// Copyright (C) 2012-2015 JIEZHI All rights reserved
package com.rgi.zkhcy.front.common.bean.dataBean;

import java.util.ArrayList;
import java.util.List;

/** 
 * 类 名: ZkMenu <br/>
 * 描 述: 中科菜单
 * 作 者: JQchen <br/>
 * 创 建： 2015-11-23 <br/>
 *
 * 历 史: (版本)作者 时间 <br/>
 */
public class ZkMenuData {
	
	private java.lang.String id;
	
	private List<ZkMenuData> subList=new ArrayList<ZkMenuData>();//子菜单列表
		return id;
	}
	public void setId(java.lang.String id) {
		this.id = id;
	}
	
		return subList;
	}
	public void setSubList(List<ZkMenuData> subList) {
		this.subList = subList;
	}
}