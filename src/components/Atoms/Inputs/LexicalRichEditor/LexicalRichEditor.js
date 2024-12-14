import React from 'react';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import ToolbarPlugin from './ToolbarPlugin';
import * as styles from './style.css.ts';

const theme = {
  text: {
    bold: styles.myBoldClass,
    italic: styles.myItalicClass,
    underline: styles.myUnderlineClass,
  },
};

const placeholderText = 'enter broadcast description';

const editorConfig = {
  namespace: 'RichTextEditor',
  theme: theme,
  onError: (error) => {
    console.error('Lexical Error:', error);
  },
};

export default function LexicalRichEditor({ label, required = false }) {
  return (
    <div style={{ color: '#fff' }}>
      <label className={styles.labelStyle}>
        { label }
        {required && <span style={{ color: 'red', marginLeft: '5px' }}>*</span>}
      </label>
      <LexicalComposer initialConfig={editorConfig}>
        <div className={styles.editorContainer}>
          <div className={styles.editorInner}>
            <RichTextPlugin
              contentEditable={
                <ContentEditable
                className={styles.editorInput}
                aria-label="Rich text editor"
                />
              }
              placeholder={
                <div className={styles.editorPlaceholder}>{placeholderText}</div>
              }
              ErrorBoundary={LexicalErrorBoundary}
            />
            <HistoryPlugin />
          </div>
              <ToolbarPlugin />
        </div>
      </LexicalComposer>
    </div>
  );
}
