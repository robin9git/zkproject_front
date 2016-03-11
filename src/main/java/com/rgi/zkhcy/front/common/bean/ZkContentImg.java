// Copyright (C) 2012-2015 JIEZHI All rights reserved
package com.rgi.zkhcy.front.common.bean;

import com.rgi.zkhcy.front.common.common.persistence.BaseEntity;

/** 
 * 类 名: ZkContentImg <br/>
 * 描 述: 内容信息
 * 作 者: JQchen <br/>
 * 创 建： 2015-11-23 <br/>
 *
 * 历 史: (版本)作者 时间 <br/>
 */
public class ZkContentImg extends BaseEntity<ZkContentImg> {

	private static final long serialVersionUID = 1L;
	
	public java.lang.String getContent_id() {
		return content_id;
	}
	public void setContent_id(java.lang.String content_id) {
		this.content_id = content_id;
	}
	public java.util.Date getAdd_time() {
		return add_time;
	}
	public void setAdd_time(java.util.Date add_time) {
		this.add_time = add_time;
	}
	public java.lang.Integer getStatus() {
		return status;
	}
	public void setStatus(java.lang.Integer status) {
		this.status = status;
	}
	public java.lang.String getImg_url() {
		return img_url;
	}
	public void setImg_url(java.lang.String img_url) {
		this.img_url = img_url;
	}
	
}