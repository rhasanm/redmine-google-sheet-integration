const getNextPageIssues = function* (offset, limit, url) {
  const options = {
    method: 'get',
    contentType: 'application/json',
  };

  let totalCount;
  let currentOffset = offset;

  do {
    const response = UrlFetchApp.fetch(`${url}&offset=${currentOffset}&limit=${limit}`, options);
    const parsedResponse = JSON.parse(response.getContentText());

    if (!totalCount) {
      totalCount = parsedResponse.total_count;
    }

    yield parsedResponse.issues;

    currentOffset += limit;
  } while (currentOffset < totalCount);
};

const fetchIssues = (url) => {
  const limit = 10;
  const issues = [];
  for (const pageIssues of getNextPageIssues(0, limit, url)) {
    handleIssues(pageIssues);
    issues.push(...pageIssues);
  }
  return issues;
};

const fetchBackendIssues = () => {
  const url = 'url';
  return fetchIssues(url);
};

const fetchFrontendIssues = () => {
  const adminPanelIssues = 'url';
  return fetchIssues(adminPanelIssues);
};

const fetchAppIssues = () => {
  const ownerAppIssues = 'url';

  const shipperAppIssues = 'url'

  return [...fetchIssues(ownerAppIssues), ...fetchIssues(shipperAppIssues)];
};
