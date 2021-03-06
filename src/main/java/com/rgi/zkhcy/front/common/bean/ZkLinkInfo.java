// Copyright (C) 2012-2015 JIEZHI All rights reserved
package com.rgi.zkhcy.front.common.bean;

import com.rgi.zkhcy.front.common.common.persistence.BaseEntity;

/** 
 * 类 名: ZkLinkInfo <br/>
 * 描 述: 友情链接
 * 作 者: JQchen <br/>
 * 创 建： 2015-11-23 <br/>
 *
 * 历 史: (版本)作者 时间 <br/>
 */
public class ZkLinkInfo extends BaseEntity<ZkLinkInfo> {

	private static final long serialVersionUID = 1L;
	 
	private java.lang.String id;	private java.lang.Integer category;//   	private java.util.Date creattime;//   	private java.lang.String name;//   	private java.lang.String url;//   	public java.lang.String getId() {
		return id;
	}
	public void setId(java.lang.String id) {
		this.id = id;
	}
	public java.lang.Integer getCategory() {	    return this.category;	}	public void setCategory(java.lang.Integer category) {	    this.category=category;	}	public java.util.Date getCreattime() {	    return this.creattime;	}	public void setCreattime(java.util.Date creattime) {	    this.creattime=creattime;	}	public java.lang.String getName() {	    return this.name;	}	public void setName(java.lang.String name) {	    this.name=name;	}	public java.lang.String getUrl() {	    return this.url;	}	public void setUrl(java.lang.String url) {	    this.url=url;	}
	
}