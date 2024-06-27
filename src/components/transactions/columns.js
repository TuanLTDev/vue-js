import { dateRangeFilterFn, formatCurrency, formatDate } from '@/lib/utils';
import { h } from 'vue';

const columnsTransactions = [
  {
    accessorKey: 'transactionId',
    header: 'ID',
    enableSorting: true,
    columnClass: 'hidden-column',
  },
  {
    accessorKey: 'originalTransactionId',
    header: 'Customer',
    enableSorting: true,
  },
  {
    accessorKey: 'bundleId',
    header: 'Project',
    enableSorting: true,
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: 'storefront',
    header: 'Store',
    enableSorting: true,
  },
  {
    accessorKey: 'productId',
    header: 'Product',
    enableSorting: true,
  },
  {
    accessorKey: 'totalCost',
    header: 'Revenue',
    cell: (info) => {
      return formatCurrency(info.getValue());
    },
    enableSorting: true,
  },
  {
    accessorKey: 'offerType',
    header: 'Free Trial',
    enableSorting: true,
    cell: (info) =>
      h('input', {
        type: 'checkbox',
        checked: info.getValue() === 1,
        disabled: true,
      }),

  },
  {
    accessorKey: 'purchaseDate',
    header: 'Purchase Date',
    cell: (info) => formatDate(new Date(info.getValue())),
    enableSorting: true,
    meta: { filterVariant: 'range' },
    filterFn: dateRangeFilterFn,
  },
  {
    accessorKey: 'expiresDate',
    header: 'Expiration Date',
    cell: (info) => {
      if (info.getValue()) {
        return formatDate(new Date(info.getValue()));
      }
      return 'Unlimited time';
    },
    enableSorting: true,
  },
  {
    accessorKey: 'type',
    header: 'Renewal',
    enableSorting: false,
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
];

export default columnsTransactions;
