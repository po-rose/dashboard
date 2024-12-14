import React from 'react';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { FORMAT_TEXT_COMMAND } from 'lexical';
import { $getSelection, $isRangeSelection, $isTextNode } from 'lexical';
import { Bold, Italic, Underline } from 'lucide-react';
import * as styles from './style.css.ts';

const ToolbarPlugin = () => {
  const [editor] = useLexicalComposerContext();

  const handleBold = () => {
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold');
  };

  const handleItalic = () => {
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'italic');
  };

  const handleUnderline = () => {
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'underline');
  };

  const handleFontSizeChange = (event) => {
    const size = event.target.value;
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        const selectedNodes = selection.getNodes();
        selectedNodes.forEach((node) => {
          if ($isTextNode(node)) {
            node.setStyle(`font-size: ${size};`);
          }
        });
      }
    });
  };

  return (
    <div className={styles.toolbar}>
      <button className={styles.toolbarButton} onClick={handleBold}><Bold size={20} /></button>
      <button className={styles.toolbarButton} onClick={handleItalic}><Italic size={20} /></button>
      <button className={styles.toolbarButton} onClick={handleUnderline}><Underline size={20} /></button>
      <div className={styles.sizeDropdown}>
        <select className={styles.sizeDropdownSelect} onChange={handleFontSizeChange} name='size' defaultValue="16px">
          <option className={styles.sizeDropdownOption} value="12px">12px</option>
          <option className={styles.sizeDropdownOption} value="14px">14px</option>
          <option className={styles.sizeDropdownOption} value="16px">16px</option>
          <option className={styles.sizeDropdownOption} value="18px">18px</option>
          <option className={styles.sizeDropdownOption} value="20px">20px</option>
        </select>
      </div>
    </div>
  );
};

export default ToolbarPlugin;
