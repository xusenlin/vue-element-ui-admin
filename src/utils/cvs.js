/**
 * 导出CSV表格
 * @param head   表头  [{title: '学习中心名称', field: 'orgName'},{title: '类型', field: ['typeDesc','type']}...]
 * @param data   数据 [{orgName:'',typeDesc:''},{},{},{}...]
 * @param fileName  文件名
 * @param multipleFieldSplitChar  一个单元格多个字段时的分割符
 */
export function exportCvsTable(
  head,
  data,
  fileName,
  multipleFieldSplitChar = "/"
) {
  let CSV = "";
  for (let i = 0; i < head.length; i++) {
    CSV += head[i].title + ",";
  }
  CSV = CSV.slice(0, -1) + "\r\n";
  for (let i = 0; i < data.length; i++) {
    let row = "";
    let rowData = data[i];
    for (let j = 0; j < head.length; j++) {
      let rowHead = head[j];
      if (rowHead.title && Array.isArray(rowHead.field)) {
        row += '"';
        for (let f in rowHead.field) {
          row += (rowData[rowHead.field[f]] || "") + multipleFieldSplitChar;
        }
        row = row.slice(0, -1);
        row += '"\t,';
      } else {
        row += '"' + (rowData[rowHead.field] || "") + '"\t,';
      }
    }
    row.slice(0, row.length - 1);
    CSV += row + "\r\n";
  }
  if (CSV === "") {
    alert("Invalid data");
    return;
  }
  let uri = new Blob(["\ufeff" + CSV], { type: "text/csv" });
  if (window.navigator && window.navigator.msSaveOrOpenBlob) {
    // for IE
    window.navigator.msSaveOrOpenBlob(CSV, fileName + ".csv");
  } else {
    // for Non-IE（chrome、firefox etc.）
    let link = document.createElement("a");
    link.href = URL.createObjectURL(uri);
    link.style = "visibility:hidden";
    link.download = fileName + ".csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
