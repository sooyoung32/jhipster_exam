package net.slipp.jhipster.service.mapper;

import net.slipp.jhipster.domain.*;
import net.slipp.jhipster.service.dto.OrdersDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity Orders and its DTO OrdersDTO.
 */
@Mapper(componentModel = "spring", uses = {CustomerMapper.class, })
public interface OrdersMapper extends EntityMapper <OrdersDTO, Orders> {

    @Mapping(source = "customer.id", target = "customerId")
    OrdersDTO toDto(Orders orders); 

    @Mapping(source = "customerId", target = "customer")
    @Mapping(target = "orderItems", ignore = true)
    Orders toEntity(OrdersDTO ordersDTO); 
    default Orders fromId(Long id) {
        if (id == null) {
            return null;
        }
        Orders orders = new Orders();
        orders.setId(id);
        return orders;
    }
}
