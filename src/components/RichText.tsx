/**
 * This configuration was generated using the CKEditor 5 Builder. You can modify it anytime using this link:
 * https://ckeditor.com/ckeditor-5/builder/?redirect=portal#installation/NodgNARATAdAbDADBSIAsIRQMwkXAVjTTlMQE4jsMo4BGORIgDkzUWbRQgFMA7FIjDA6YIeLFg6AXUg8oAIzwFsEaUA=
 */

import { useState, useEffect, useRef, useMemo } from 'react';
import { CKEditor, useCKEditorCloud } from '@ckeditor/ckeditor5-react';

import './RichText.css';

const LICENSE_KEY =
    'eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3NDkyNTQzOTksImp0aSI6ImEyZmM5OTQxLTdlYTAtNGFhYi1iMjkwLThjZDAxZDgyZGY2NiIsInVzYWdlRW5kcG9pbnQiOiJodHRwczovL3Byb3h5LWV2ZW50LmNrZWRpdG9yLmNvbSIsImRpc3RyaWJ1dGlvbkNoYW5uZWwiOlsiY2xvdWQiLCJkcnVwYWwiLCJzaCJdLCJ3aGl0ZUxhYmVsIjp0cnVlLCJsaWNlbnNlVHlwZSI6InRyaWFsIiwiZmVhdHVyZXMiOlsiKiJdLCJ2YyI6IjcwYjYyMWY0In0.3ykf7YcQUvrJ3t_TdPyS__2HRWvNq9QbdGU4EVU_bTmki3Dqcb2hF3E0IjZZzaaVjazCwoaBv4URI7DlrQSV_w';

/**
 * USE THIS INTEGRATION METHOD ONLY FOR DEVELOPMENT PURPOSES.
 *
 * This sample is configured to use OpenAI API for handling AI Assistant queries.
 * See: https://ckeditor.com/docs/ckeditor5/latest/features/ai-assistant/ai-assistant-integration.html
 * for a full integration and customization guide.
 */
const AI_API_KEY = import.meta.env.VITE_AI_API_KEY;
if (!AI_API_KEY) {
    throw new Error('Missing AI API key');
}


export default function RichText({
    content,
    onChange }: {
        content: string,
        onChange: (newContent: string) => void
    }) {
    const editorContainerRef = useRef(null);
    const editorRef = useRef(null);
    const [isLayoutReady, setIsLayoutReady] = useState(false);
    const cloud = useCKEditorCloud({ version: '45.1.0', premium: true });

    useEffect(() => {
        setIsLayoutReady(true);

        return () => setIsLayoutReady(false);
    }, []);

    const { ClassicEditor, editorConfig } = useMemo(() => {
        if (cloud.status !== 'success' || !isLayoutReady) {
            return {};
        }

        const {
            ClassicEditor,
            AutoLink,
            Autosave,
            Bold,
            CloudServices,
            Code,
            CodeBlock,
            Essentials,
            FindAndReplace,
            Heading,
            HorizontalLine,
            Italic,
            Link,
            List,
            ListProperties,
            Paragraph,
            Strikethrough,
            Subscript,
            Superscript,
            TodoList,
            Underline
        } = cloud.CKEditor;
        const { AIAssistant, ExportPdf, FormatPainter, MultiLevelList, OpenAITextAdapter } = cloud.CKEditorPremiumFeatures;

        return {
            ClassicEditor,
            editorConfig: {
                toolbar: {
                    items: [
                        'undo',
                        'redo',
                        '|',
                        'aiCommands',
                        'aiAssistant',
                        '|',
                        'exportPdf',
                        'formatPainter',
                        'findAndReplace',
                        '|',
                        'heading',
                        '|',
                        'bold',
                        'italic',
                        'underline',
                        'strikethrough',
                        'subscript',
                        'superscript',
                        'code',
                        '|',
                        'horizontalLine',
                        'link',
                        'codeBlock',
                        '|',
                        'bulletedList',
                        'numberedList',
                        'multiLevelList',
                        'todoList'
                    ],
                    shouldNotGroupWhenFull: true
                },
                plugins: [
                    AIAssistant,
                    AutoLink,
                    Autosave,
                    Bold,
                    CloudServices,
                    Code,
                    CodeBlock,
                    Essentials,
                    ExportPdf,
                    FindAndReplace,
                    FormatPainter,
                    Heading,
                    HorizontalLine,
                    Italic,
                    Link,
                    List,
                    ListProperties,
                    MultiLevelList,
                    OpenAITextAdapter,
                    Paragraph,
                    Strikethrough,
                    Subscript,
                    Superscript,
                    TodoList,
                    Underline
                ],
                ai: {
                    openAI: {
                        requestHeaders: {
                            Authorization: 'Bearer ' + AI_API_KEY
                        }
                    }
                },
                exportPdf: {
                    stylesheets: [
                        /* This path should point to the content stylesheets on your assets server. */
                        /* See: https://ckeditor.com/docs/ckeditor5/latest/features/converters/export-pdf.html */
                        './export-style.css',
                        /* Export PDF needs access to stylesheets that style the content. */
                        'https://cdn.ckeditor.com/ckeditor5/45.1.0/ckeditor5.css',
                        'https://cdn.ckeditor.com/ckeditor5-premium-features/45.1.0/ckeditor5-premium-features.css'
                    ],
                    fileName: 'export-pdf-demo.pdf',
                    converterOptions: {
                        format: 'Tabloid',
                        margin_top: '20mm',
                        margin_bottom: '20mm',
                        margin_right: '24mm',
                        margin_left: '24mm',
                        page_orientation: 'portrait'
                    }
                },
                heading: {
                    options: [
                        {
                            model: 'paragraph',
                            title: 'Paragraph',
                            class: 'ck-heading_paragraph'
                        },
                        {
                            model: 'heading1',
                            view: 'h1',
                            title: 'Heading 1',
                            class: 'ck-heading_heading1'
                        },
                        {
                            model: 'heading2',
                            view: 'h2',
                            title: 'Heading 2',
                            class: 'ck-heading_heading2'
                        },
                        {
                            model: 'heading3',
                            view: 'h3',
                            title: 'Heading 3',
                            class: 'ck-heading_heading3'
                        },
                        {
                            model: 'heading4',
                            view: 'h4',
                            title: 'Heading 4',
                            class: 'ck-heading_heading4'
                        },
                        {
                            model: 'heading5',
                            view: 'h5',
                            title: 'Heading 5',
                            class: 'ck-heading_heading5'
                        },
                        {
                            model: 'heading6',
                            view: 'h6',
                            title: 'Heading 6',
                            class: 'ck-heading_heading6'
                        }
                    ]
                },
                initialData: content,
                licenseKey: LICENSE_KEY,
                link: {
                    addTargetToExternalLinks: true,
                    defaultProtocol: 'https://',
                    decorators: {
                        toggleDownloadable: {
                            mode: 'manual',
                            label: 'Downloadable',
                            attributes: {
                                download: 'file'
                            }
                        }
                    }
                },
                list: {
                    properties: {
                        styles: true,
                        startIndex: true,
                        reversed: true
                    }
                },
                placeholder: 'Type or paste your content here!'
            }
        };
    }, [cloud, isLayoutReady, content]);

    useEffect(() => {
        if (editorConfig) {
            configUpdateAlert(editorConfig);
        }
    }, [editorConfig]);

    return (
        <div className="main-container">
            <div className="editor-container editor-container_classic-editor" ref={editorContainerRef}>
                <div className="editor-container__editor">
                    <div ref={editorRef}>{ClassicEditor && editorConfig && <CKEditor
                        editor={ClassicEditor}
                        config={editorConfig}
                        onChange={(_event, editor) => {
                            const data = editor.getData();
                            onChange(data);
                        }}
                    />}
                    </div>
                </div>
            </div>
        </div>
    );
}

/**
 * This function exists to remind you to update the config needed for premium features.
 * The function can be safely removed. Make sure to also remove call to this function when doing so.
 */
function configUpdateAlert(config) {
    if (configUpdateAlert.configUpdateAlertShown) {
        return;
    }

    const isModifiedByUser = (currentValue, forbiddenValue) => {
        if (currentValue === forbiddenValue) {
            return false;
        }

        if (currentValue === undefined) {
            return false;
        }

        return true;
    };

    const valuesToUpdate = [];

    configUpdateAlert.configUpdateAlertShown = true;

    if (!isModifiedByUser(config.licenseKey, '<YOUR_LICENSE_KEY>')) {
        valuesToUpdate.push('LICENSE_KEY');
    }

    if (!isModifiedByUser(config.ai?.openAI?.requestHeaders?.Authorization, 'Bearer <YOUR_AI_API_KEY>')) {
        valuesToUpdate.push('AI_API_KEY');
    }

    if (valuesToUpdate.length) {
        window.alert(
            [
                'Please update the following values in your editor config',
                'to receive full access to Premium Features:',
                '',
                ...valuesToUpdate.map(value => ` - ${value}`)
            ].join('\n')
        );
    }
}
