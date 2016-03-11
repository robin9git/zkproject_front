// Copyright (C) 2012-2015 JIEZHI All rights reserved
package com.rgi.zkhcy.front.common.bean;

import com.rgi.zkhcy.front.common.common.persistence.BaseEntity;

/** 
 * 类 名: ZkCompInfo <br/>
 * 描 述: 公司信息
 * 作 者: JQchen <br/>
 * 创 建： 2015-11-23 <br/>
 *
 * 历 史: (版本)作者 时间 <br/>
 */
public class ZkCompInfo extends BaseEntity<ZkCompInfo> {

	private static final long serialVersionUID = 1L;
	
	private java.lang.String id;
	private String compName;	private java.lang.String addr;//   
	private String post;	private java.lang.String tele;//   	private java.lang.String fax;//   	private java.lang.String email;//   	private String website;
	
	public String getCompName() {
		return compName;
	}
	public void setCompName(String compName) {
		this.compName = compName;
	}
	public String getPost() {
		return post;
	}
	public void setPost(String post) {
		this.post = post;
	}
	public String getWebsite() {
		return website;
	}
	public void setWebsite(String website) {
		this.website = website;
	}
	public java.lang.String getId() {
		return id;
	}
	public void setId(java.lang.String id) {
		this.id = id;
	}
	public java.lang.String getAddr() {	    return this.addr;	}	public void setAddr(java.lang.String addr) {	    this.addr=addr;	}	public java.lang.String getTele() {	    return this.tele;	}	public void setTele(java.lang.String tele) {	    this.tele=tele;	}	public java.lang.String getFax() {	    return this.fax;	}	public void setFax(java.lang.String fax) {	    this.fax=fax;	}	public java.lang.String getEmail() {	    return this.email;	}	public void setEmail(java.lang.String email) {	    this.email=email;	}	
}