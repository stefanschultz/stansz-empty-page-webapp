import React from 'react';
import './PageCreator.scss';
import PropTypes from 'prop-types';
import PageObject, {
  UNIT_MILLIMETER_FULLNAME,
  UNIT_INCH_FULLNAME,
  UNIT_PIXEL_FULLNAME,
  UNIT_MILLIMETER,
  UNIT_INCH,
  UNIT_PIXEL,
  FILE_EXTENSION_PDF,
  FILE_EXTENSION_DOCX,
  FILE_EXTENSION_JPEG,
  FILE_EXTENSION_PNG,
  PAGE_ORIENTATION_PORTRAIT_SHORTCUT,
  PAGE_ORIENTATION_LANDSCAPE_SHORTCUT,
  PAGE_ORIENTATION_PORTRAIT,
  PAGE_ORIENTATION_LANDSCAPE,
  MIN_WIDTH_AND_HEIGHT,
  MAX_WIDTH_AND_HEIGHT,
  DEFAULT_PAGE_ORIENTATION,
  DEFAULT_FILE_FORMAT,
  DEFAULT_PAGE_WIDTH,
  DEFAULT_PAGE_HEIGHT
} from '../../shared/models/PageObject.model';
import { Form, Input, Button, Radio, Row, Col, Select } from 'antd';
import { generateDocumentPdf } from '../../core/generate-document-pdf';
import { generateDocumentDocx } from '../../core/generate-document-docx';
import { generateDocumentPng } from '../../core/generate-document-png';
import { generateDocumentJpeg } from '../../core/generate-document-jpeg';

const { Option } = Select;

export default class PageCreator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageObject: new PageObject()
    };

    this.refForm = React.createRef();

    this.onChangeSelectFileFormat = this.onChangeSelectFileFormat.bind(this);
    this.onChangeSelectUnit = this.onChangeSelectUnit.bind(this);
    this.onChangePageWidth = this.onChangePageWidth.bind(this);
    this.onChangePageHeight = this.onChangePageHeight.bind(this);
    this.onBlurPageWidth = this.onBlurPageWidth.bind(this);
    this.onBlurPageHeight = this.onBlurPageHeight.bind(this);
    this.onChangeRadioPageOrientation = this.onChangeRadioPageOrientation.bind(this);
    this.onClickGenerateAndDownloadDocument = this.onClickGenerateAndDownloadDocument.bind(this);
  }

  onChangeSelectFileFormat(value) {
    let pageObject = this.state.pageObject;
    pageObject.fileFormat = value;

    // check if only pixel based file format is selected
    if (value === FILE_EXTENSION_JPEG || value === FILE_EXTENSION_PNG) {
      this.refForm.current.setFieldsValue({ nameSelectUnit: UNIT_PIXEL });
      pageObject.unit = UNIT_PIXEL;
      this.setState({ pageObject: pageObject });
    } else {
      this.refForm.current.setFieldsValue({ nameSelectUnit: UNIT_MILLIMETER });
      pageObject.unit = UNIT_MILLIMETER;
      this.setState({ pageObject: pageObject });
    }
  }

  onChangeSelectUnit(value) {
    let pageObject = this.state.pageObject;
    pageObject.unit = value;
    this.setState({ selectUnit: value, pageObject: pageObject });
  }

  onChangePageWidth(event) {
    event.preventDefault();
    let pageObject = this.state.pageObject;
    pageObject.pageWidth = event.target.value;
    this.setState({ pageObject: pageObject });
  }

  onChangePageHeight(event) {
    event.preventDefault();
    let pageObject = this.state.pageObject;
    pageObject.pageHeight = event.target.value;
    this.setState({ pageObject: pageObject });
  }

  onBlurPageWidth(event) {
    event.preventDefault();
    let pageObject = this.state.pageObject;
    if (parseInt(event.target.value, 10) >= MIN_WIDTH_AND_HEIGHT && parseInt(event.target.value, 10) <= MAX_WIDTH_AND_HEIGHT) {
      pageObject.pageWidth = parseInt(event.target.value, 10);
    } else {
      this.refForm.current.setFieldsValue({ namePageWidth: DEFAULT_PAGE_WIDTH });
      pageObject.pageWidth = DEFAULT_PAGE_WIDTH;
    }
    this.setState({ pageObject: pageObject });
  }

  onBlurPageHeight(event) {
    event.preventDefault();
    let pageObject = this.state.pageObject;
    if (parseInt(event.target.value, 10) >= MIN_WIDTH_AND_HEIGHT && parseInt(event.target.value, 10) <= MAX_WIDTH_AND_HEIGHT) {
      pageObject.pageHeight = parseInt(event.target.value, 10);
    } else {
      this.refForm.current.setFieldsValue({ namePageHeight: DEFAULT_PAGE_HEIGHT });
      pageObject.pageHeight = DEFAULT_PAGE_HEIGHT;
    }
    this.setState({ pageObject: pageObject });
  }

  onChangeRadioPageOrientation(event) {
    event.preventDefault();
    let pageObject = this.state.pageObject;
    pageObject.pageOrientation = event.target.value;
    this.setState({ pageObject: pageObject });
  }

  onClickGenerateAndDownloadDocument(event) {
    event.preventDefault();
    if (this.state.pageObject.fileFormat === FILE_EXTENSION_PDF) {
      generateDocumentPdf(this.state.pageObject);
    } else if (this.state.pageObject.fileFormat === FILE_EXTENSION_DOCX) {
      generateDocumentDocx(this.state.pageObject);
    } else if (this.state.pageObject.fileFormat === FILE_EXTENSION_PNG) {
      generateDocumentPng(this.state.pageObject);
    } else if (this.state.pageObject.fileFormat === FILE_EXTENSION_JPEG) {
      generateDocumentJpeg(this.state.pageObject);
    }
  }

  render() {
    return (
      <div className="PageCreator">
        <Row>
          <Col span={24}>
            <Form
              name="pageCreatorForm"
              labelCol={{
                span: 4
              }}
              wrapperCol={{
                span: 8
              }}
              initialValues={{
                nameSelectUnit: this.state.pageObject.fileFormat === FILE_EXTENSION_JPEG || this.state.pageObject.fileFormat === FILE_EXTENSION_PNG ? UNIT_PIXEL : UNIT_MILLIMETER,
                namePageWidth: DEFAULT_PAGE_WIDTH,
                namePageHeight: DEFAULT_PAGE_HEIGHT,
                nameRadioPageOrientation: DEFAULT_PAGE_ORIENTATION,
                nameSelectFileFormat: DEFAULT_FILE_FORMAT
              }}
              ref={this.refForm}
            >
              <Form.Item
                key="keySelectFileFormat"
                id="idSelectFileFormat"
                label="File format"
                name="nameSelectFileFormat"
                rules={[
                  {
                    required: false
                  }
                ]}
              >
                <Select
                  placeholder="Select a file format"
                  onChange={this.onChangeSelectFileFormat}
                >
                  <Option value={FILE_EXTENSION_PDF}>{FILE_EXTENSION_PDF}</Option>
                  <Option value={FILE_EXTENSION_DOCX}>{FILE_EXTENSION_DOCX}</Option>
                  <Option value={FILE_EXTENSION_PNG}>{FILE_EXTENSION_PNG}</Option>
                  <Option value={FILE_EXTENSION_JPEG}>{FILE_EXTENSION_JPEG}</Option>
                </Select>
              </Form.Item>
              <Form.Item
                key="keySelectUnit"
                id="idSelectUnit"
                label="Unit"
                name="nameSelectUnit"
                rules={[
                  {
                    required: false
                  }
                ]}
              >
                <Select
                  placeholder="Select the unit"
                  onChange={this.onChangeSelectUnit}
                >
                  <Option value={UNIT_MILLIMETER} disabled={this.state.pageObject.fileFormat === FILE_EXTENSION_JPEG || this.state.pageObject.fileFormat === FILE_EXTENSION_PNG ? true : false}>{UNIT_MILLIMETER} ({UNIT_MILLIMETER_FULLNAME})</Option>
                  <Option value={UNIT_INCH} disabled={this.state.pageObject.fileFormat === FILE_EXTENSION_JPEG || this.state.pageObject.fileFormat === FILE_EXTENSION_PNG ? true : false}>{UNIT_INCH} ({UNIT_INCH_FULLNAME})</Option>
                  <Option value={UNIT_PIXEL}>{UNIT_PIXEL} ({UNIT_PIXEL_FULLNAME})</Option>
                </Select>
              </Form.Item>
              <Form.Item
                key="keyInputPageWidth"
                id="idInputPageWidth"
                label="Page width"
                name="namePageWidth"
                rules={[
                  {
                    required: false,
                    message: 'Please input the page width!'
                  }
                ]}
              >
                <Input type={'number'} min={MIN_WIDTH_AND_HEIGHT} max={MAX_WIDTH_AND_HEIGHT} onBlur={this.onBlurPageWidth} onChange={this.onChangePageWidth} />
              </Form.Item>
              <Form.Item
                key="keyInputPageHeight"
                id="idInputPageHeight"
                label="Page height"
                name="namePageHeight"
                rules={[
                  {
                    required: false,
                    message: 'Please input the page height!'
                  }
                ]}
              >
                <Input type={'number'} min={MIN_WIDTH_AND_HEIGHT} max={MAX_WIDTH_AND_HEIGHT} onBlur={this.onBlurPageHeight} onChange={this.onChangePageHeight} />
              </Form.Item>
              <Form.Item
                key="keyRadioPageOrientation"
                id="idRadioPageOrientation"
                label="Page orientation"
                name="nameRadioPageOrientation"
              >
                <Radio.Group value={this.state.pageObject.pageOrientation} onChange={this.onChangeRadioPageOrientation}>
                  <Radio.Button value={PAGE_ORIENTATION_PORTRAIT_SHORTCUT}>{PAGE_ORIENTATION_PORTRAIT}</Radio.Button>
                  <Radio.Button value={PAGE_ORIENTATION_LANDSCAPE_SHORTCUT}>{PAGE_ORIENTATION_LANDSCAPE}</Radio.Button>
                </Radio.Group>
              </Form.Item>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col span={20} offset={4}>
            <Button type="primary" size="large" style={{ fontWeight: 'bold' }} onClick={this.onClickGenerateAndDownloadDocument}>
              Generate and download {this.state.pageObject.fileFormat.toUpperCase()} document
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

PageCreator.propTypes = { };