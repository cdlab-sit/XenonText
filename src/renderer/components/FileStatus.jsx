import React from 'react';
import { useSelector } from 'react-redux';
import { getFileStatus } from '../reducks/file/selectors';

const savedImagePathCommand =
  'M4.293 4.293a1 1 0 011.414 0L10 ' +
  '8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 ' +
  '0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 ' +
  '01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z';
const unsavedImagePathCommand =
  'M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 ' +
  '7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 ' +
  '1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 ' +
  '10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z';

// 今すべて共通になってるので親からeditorIdもらう必要あり,
// もしNewだったらFileないからgetFileStatusエラーになる
//あとでもいっかファイルステータス
export default function FileStatus() {
  let fileStatusPathCommand = savedImagePathCommand;
  const isSaved = getFileStatus(useSelector((state) => state));
  if (!isSaved) {
    fileStatusPathCommand = unsavedImagePathCommand;
  }
  return (
    <div className="w-3 h-3 mx-2 flex-shrink-0">
      <svg className="text-gray-300" fill="currentColor" viewBox="0 0 20 20">
        <path clipRule="evenodd" d={fileStatusPathCommand} fillRule="evenodd" />
      </svg>
    </div>
  );
}
