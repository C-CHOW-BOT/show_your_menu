import React, {useEffect, useState} from 'react';
import {
  Button,
  Form,
  Input,
  Layout,
  InputNumber,
  Upload,
  Modal,
  Select,
  Space,
} from 'antd';
import { PlusOutlined, MinusCircleOutlined } from '@ant-design/icons';
import { dietaryOption } from '../config/dietaryOption';



const { Content } = Layout;
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 22,
      offset: 1,
    },
    lg: {
      span: 26,
      offset: 4,
    }
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 22,
      offset: 1,
    },
    lg: {
      span: 16,
      offset: 4,
    }
  },
};

const CreateMenuItem = () => {
  const [form] = Form.useForm();
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState([]);
  
  const handleCancel = () => setPreviewOpen(false);
  
  // const handlePreview = 
  
  
}




export default CreateMenuItem;