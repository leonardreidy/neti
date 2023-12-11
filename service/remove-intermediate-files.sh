# Remove intermediate files. No need to delete /work/service/node_modules as
# this will be done by 'npm ci'. [Manfred, 21may2023]
rm -rf /work/service/build
rm -rf /work/service/tsoa-generated
