import React, { useEffect, useRef, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import type { InputRef } from 'antd';
import { Space, Input, Tag, Tooltip, theme } from 'antd';

const tagColors = ['#108ee9', '#fa8c16', '#87d068', '#f50', '#2db7f5'];

interface TagListProps {
    tags: string[];
    setTags: (tags: string[]) => void;
}

const FilterableList: React.FC<TagListProps> = (TagListProps) => {
    const { token } = theme.useToken();
    const [inputVisible, setInputVisible] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [editInputIndex, setEditInputIndex] = useState(-1);
    const [editInputValue, setEditInputValue] = useState('');
    const inputRef = useRef<InputRef>(null);
    const editInputRef = useRef<InputRef>(null);

    useEffect(() => {
        if (inputVisible) {
            inputRef.current?.focus();
        }
    }, [inputVisible]);

    useEffect(() => {
        editInputRef.current?.focus();
    }, [inputValue]);

    const handleClose = (removedTag: string) => {
        const newTags = TagListProps.tags.filter((tag) => tag !== removedTag);
        console.log(newTags);
        TagListProps.setTags(newTags);
    };

    const showInput = () => {
        setInputVisible(true);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleInputConfirm = () => {
        if (inputValue && TagListProps.tags.indexOf(inputValue) === -1) {
            TagListProps.setTags([...TagListProps.tags, inputValue]);
        }
        setInputVisible(false);
        setInputValue('');
    };

    const handleEditInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditInputValue(e.target.value);
    };

    const handleEditInputConfirm = () => {
        const newTags = [...TagListProps.tags];
        newTags[editInputIndex] = editInputValue;
        TagListProps.setTags(newTags);
        setEditInputIndex(-1);
        setInputValue('');
    };

    const tagInputStyle: React.CSSProperties = {
        width: 78,
        verticalAlign: 'top',
    };

    const tagPlusStyle: React.CSSProperties = {
        background: token.colorBgContainer,
        borderStyle: 'dashed',
    };

    return (
        <Space size={[0, 8]} wrap>
            <Space size={[0, 8]} wrap>
                {TagListProps.tags.map((tag, index) => {
                    if (editInputIndex === index) {
                        return (
                            <Input
                                ref={editInputRef}
                                key={tag}
                                size="small"
                                style={tagInputStyle}
                                value={editInputValue}
                                onChange={handleEditInputChange}
                                onBlur={handleEditInputConfirm}
                                onPressEnter={handleEditInputConfirm}
                            />
                        );
                    }
                    const isLongTag = tag.length > 20;
                    const tagColor = `#${index.toString(16)}${index.toString(16)}${index.toString(16)}`;
                    const tagElem = (
                        <Tag
                            key={tag}
                            closable={index >= 0}
                            style={{ userSelect: 'none' }}
                            onClose={() => handleClose(tag)}
                            color={tagColors[index % tagColors.length]}
                        >
                            <span
                                onDoubleClick={(e) => {
                                    if (index !== 0) {
                                        setEditInputIndex(index);
                                        setEditInputValue(tag);
                                        e.preventDefault();
                                    }
                                }}
                            >
                                {isLongTag ? `${tag.slice(0, 20)}...` : tag}
                            </span>
                        </Tag>
                    );
                    return isLongTag ? (
                        <Tooltip title={tag} key={tag}>
                            {tagElem}
                        </Tooltip>
                    ) : (
                        tagElem
                    );
                })}
            </Space>
            {inputVisible ? (
                <Input
                    ref={inputRef}
                    type="text"
                    size="small"
                    style={tagInputStyle}
                    value={inputValue}
                    onChange={handleInputChange}
                    onBlur={handleInputConfirm}
                    onPressEnter={handleInputConfirm}
                />
            ) : (
                <Tag style={tagPlusStyle} onClick={showInput}>
                    <PlusOutlined /> New Tag
                </Tag>
            )}
        </Space>
    );
};

export default FilterableList;