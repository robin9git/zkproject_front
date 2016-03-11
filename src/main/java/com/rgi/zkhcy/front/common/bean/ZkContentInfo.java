// Copyright (C) 2012-2015 JIEZHI All rights reserved
package com.rgi.zkhcy.front.common.bean;

import com.rgi.zkhcy.front.common.common.persistence.BaseEntity;

/** 
 * 类 名: ZkContentInfo <br/>
 * 描 述: 内容信息
 * 作 者: JQchen <br/>
 * 创 建： 2015-11-23 <br/>
 *
 * 历 史: (版本)作者 时间 <br/>
 */
public class ZkContentInfo extends BaseEntity<ZkContentInfo> {

	private static final long serialVersionUID = 1L;
		private java.lang.String id;//   	private java.lang.String title;//   	private java.util.Date creattime;//   	private java.lang.Object content;//   	private java.lang.Integer status;//   是否有效：0无效，1有效，2删除	private java.lang.String long_title;//   	private java.lang.String menu_id;//   	private java.lang.Integer contorder;//   	private java.lang.Integer newslevel;//   	private java.lang.String newsfrom;//   	private java.lang.String pic_src;// 
	
	private java.lang.String publicTime;// 
	public java.lang.String getPublicTime() {
		return publicTime;
	}
	public void setPublicTime(java.lang.String publicTime) {
		this.publicTime = publicTime;
	}
	public java.lang.String getId() {	    return this.id;	}	public void setId(java.lang.String id) {	    this.id=id;	}	public java.lang.String getTitle() {	    return this.title;	}	public void setTitle(java.lang.String title) {	    this.title=title;	}	public java.util.Date getCreattime() {	    return this.creattime;	}	public void setCreattime(java.util.Date creattime) {	    this.creattime=creattime;	}	public java.lang.Object getContent() {	    return this.content;	}	public void setContent(java.lang.Object content) {	    this.content=content;	}	public java.lang.Integer getStatus() {	    return this.status;	}	public void setStatus(java.lang.Integer status) {	    this.status=status;	}	public java.lang.String getLong_title() {	    return this.long_title;	}	public void setLong_title(java.lang.String long_title) {	    this.long_title=long_title;	}	public java.lang.String getMenu_id() {	    return this.menu_id;	}	public void setMenu_id(java.lang.String menu_id) {	    this.menu_id=menu_id;	}	public java.lang.Integer getContorder() {	    return this.contorder;	}	public void setContorder(java.lang.Integer contorder) {	    this.contorder=contorder;	}	public java.lang.Integer getNewslevel() {	    return this.newslevel;	}	public void setNewslevel(java.lang.Integer newslevel) {	    this.newslevel=newslevel;	}	public java.lang.String getNewsfrom() {	    return this.newsfrom;	}	public void setNewsfrom(java.lang.String newsfrom) {	    this.newsfrom=newsfrom;	}	public java.lang.String getPic_src() {	    return this.pic_src;	}	public void setPic_src(java.lang.String pic_src) {	    this.pic_src=pic_src;	}
	
}