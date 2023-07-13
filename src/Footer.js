import React from "react";
import "./Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col-md">
            <ul className="list-unstyled">
              <li>Mô tả âm thanh</li>
              <li>Quan hệ với nhà đầu tư</li>
              <li>Thông báo pháp lý</li>
            </ul>
          </div>
          {/* Column2 */}
          <div className="col-md">
            <ul className="list-unstyled">
              <li>Trung tâm trợ giúp</li>
              <li>Quyền riêng tư</li>
              <li>Liên hệ với chúng tôi</li>
            </ul>
          </div>
          {/* Column3 */}
          <div className="col-md">
            <ul className="list-unstyled">
              <li>Thẻ quà tặng</li>
              <li>Điều khoản sử dụng</li>
              <li>Thông tin doanh nghiệp</li>
            </ul>
          </div>
          {/* Column4 */}
          <div className="col-md">
            <ul className="list-unstyled">
              <li>Contact</li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaFacebook />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} THE MOVIE | All rights reserved |
            ttv.thuyvy.1544@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
